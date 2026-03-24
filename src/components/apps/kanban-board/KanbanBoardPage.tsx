import { useEffect, useState } from "react";

import KanbanBoardCard from "@/components/apps/kanban-board/KanbanBoardCard.tsx";

const KanbanBoardPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="text-center p-5">Loading Kanban Board...</div>;
  }

  return (
    <div className="kanban-page">
      <KanbanBoardCard />
    </div>
  );
};

export default KanbanBoardPage;
