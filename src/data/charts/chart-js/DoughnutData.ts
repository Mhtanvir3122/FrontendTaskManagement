import { getLocalStorageItem, hexToRGB } from "@/_helper/index";

export const DoughnutData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "Dataset #1",
      backgroundColor: [
        hexToRGB(getLocalStorageItem("color-primary", "#0F626A"), 0.5),
        "rgba(10, 185, 100,0.5)",
        "rgba( 225,10,90,0.5)",
      ],
      data: [-20, -54, 20, 0, 56, 55, -40],
    },
  ],
};
