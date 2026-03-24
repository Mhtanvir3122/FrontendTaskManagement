import React, { useEffect, useRef } from "react";
import { Card } from "react-bootstrap";

import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, {
  Draggable,
  EventReceiveArg,
} from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";

interface CalendarEvent {
  id?: string | number;
  title: string;
  start?: Date;
  extendedProps?: {
    iconHtml?: string;
  };
  remove: () => void;
}

interface EventRenderArg {
  event: CalendarEvent;
}

interface FullCalendarCardProps {
  externalRef: React.RefObject<HTMLDivElement | null>;
}

const FullCalendarCard: React.FC<FullCalendarCardProps> = ({ externalRef }) => {
  const calendarRef = useRef<FullCalendar | null>(null);
  const draggableRef = useRef<Draggable | null>(null);

  useEffect(() => {
  if (externalRef.current && !draggableRef.current) {
    draggableRef.current = new Draggable(externalRef.current, {
      itemSelector: ".fc-event",
      eventData: function (el: HTMLElement) {
        return {
          title: el.innerText.trim(),
          className: el.getAttribute("data-classname") || "",
          extendedProps: {
            iconHtml: el.innerHTML,
          },
        };
      },
    });
    return () => {
      draggableRef.current?.destroy();
      draggableRef.current = null;
    };
  }
}, [externalRef]);

  const handleEventReceive = (info: EventReceiveArg) => {
    const checkbox = document.getElementById("drop-remove") as HTMLInputElement;
    if (checkbox?.checked) {
      info.draggedEl.parentNode?.removeChild(info.draggedEl);
    }
  };

  const handleCustomEventAdd = () => {
    const dateStr = prompt("Enter a date in YYYY-MM-DD format");
    const date = new Date(dateStr + "T00:00:00");

    if (!isNaN(date.valueOf())) {
      const calendarApi = calendarRef.current?.getApi();
      calendarApi?.addEvent({
        title: "Dynamic Event",
        start: date,
        allDay: true,
      });
      alert("Event added.");
    } else {
      alert("Invalid date.");
    }
  };

  const renderEventWithDeleteButton = (arg: EventRenderArg) => {
    const event = arg.event;
    const iconHtml = event.extendedProps?.iconHtml || event.title;
    const deleteButtonId = `delete-${event.id || Math.random()}-${event.start?.getTime()}`;

    setTimeout(() => {
      const btn = document.getElementById(deleteButtonId);
      if (btn) {
        btn.onclick = (e) => {
          e.stopPropagation();
          event.remove();
        };
      }
    }, 0);

    return {
      html: `
      <div class="fc-custom-event d-flex justify-content-between align-items-center">
        <div class="fc-event-content">${iconHtml}</div>
        <button id="${deleteButtonId}" class="btn icon-btn p-0 w-20 h-20 fc-delete-btn cursor-pointer">
          ✕
        </button>
        
      </div>
    `,
    };
  };

  return (
    <Card>
      <Card.Body className="app-calendar">
        <FullCalendar
          ref={calendarRef}
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            listPlugin,
          ]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "prev,next,addEventButton",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
          }}
          customButtons={{
            addEventButton: {
              text: "Add event...",
              click: handleCustomEventAdd,
            },
          }}
          editable
          droppable
          selectable
          selectMirror
          dayMaxEvents={true}
          eventReceive={handleEventReceive}
          eventContent={renderEventWithDeleteButton}
          events={[
            { title: "Events", start: "2025-07-01", end: "2025-07-02" },
            { title: "Events", start: "2025-07-08", end: "2025-07-12" },
            { title: "Meeting", start: "2025-07-12T10:30:00" },
            { title: "Lunch", start: "2025-07-12T12:00:00" },
            { title: "Meeting", start: "2025-07-12T14:30:00" },
            { title: "Happy Hour", start: "2025-07-12T17:20:00" },
            { title: "Dinner", start: "2025-07-12T20:10:00" },
            {
              groupId: "availableForMeeting",
              start: "2025-07-11T10:00:00",
              end: "2025-07-11T16:00:00",
              display: "background",
            },
          ]}
          eventTimeFormat={{
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          }}
          height="auto"
        />
      </Card.Body>
    </Card>
  );
};

export default FullCalendarCard;
