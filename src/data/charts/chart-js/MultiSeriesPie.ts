import { getLocalStorageItem, hexToRGB } from "@/_helper";
import {
  Chart,
  ChartDataset,
  ChartEvent,
  ChartOptions,
  LegendElement,
  TooltipItem,
  LegendItem 
} from "chart.js";

type PieChartData = {
  labels: string[];
  datasets: ChartDataset<"pie">[];
  options: ChartOptions<"pie">;
};

export const MultiSeriesPie: PieChartData = {
  labels: [
    "Overall Yay",
    "Overall Nay",
    "Group A Yay",
    "Group A Nay",
    "Group B Yay",
    "Group B Nay",
    "Group C Yay",
    "Group C Nay",
  ],
  datasets: [
    {
      backgroundColor: [
        hexToRGB(getLocalStorageItem("color-primary", "#0F626A"), 0.1),
        hexToRGB(getLocalStorageItem("color-primary", "#0F626A")),
      ],
      data: [21, 79],
    },
    {
      backgroundColor: [
        hexToRGB(getLocalStorageItem("color-secondary", "#626262"), 0.1),
        hexToRGB(getLocalStorageItem("color-secondary", "#626262")),
      ],
      data: [33, 67],
    },
    {
      backgroundColor: [
        hexToRGB(getLocalStorageItem("color-success", "#0AB964"), 0.5),
        hexToRGB(getLocalStorageItem("color-success", "#0AB964"), 1),
      ],
      data: [20, 80],
    },
    {
      backgroundColor: [
        hexToRGB(getLocalStorageItem("color-danger", "#E14E5A"), 0.5),
        hexToRGB(getLocalStorageItem("color-danger", "#E14E5A"), 1),
      ],
      data: [10, 90],
    },
  ],
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          generateLabels(chart: Chart) {
            const labelNames = chart.data.labels as string[];
            return labelNames.map((text, index) => {
              const meta = chart.getDatasetMeta(0); 
              const style = meta.controller.getStyle(index,true);

              return {
                text,
                fillStyle: style.backgroundColor,
                strokeStyle: style.borderColor,
                lineWidth: style.borderWidth,
                index
              } as LegendItem;
            });
          },
        },
        onClick: (
          _mouseEvent: ChartEvent,
          _,
          legend: LegendElement<"pie">
        ) => {
          console.log("Legend Clicked", legend);
        },
      },
      tooltip: {
        callbacks: {
          label(context: TooltipItem<"pie">): string {
            return `${context.label}: ${context.formattedValue}`;
          },
        },
      },
    },
  },
};
