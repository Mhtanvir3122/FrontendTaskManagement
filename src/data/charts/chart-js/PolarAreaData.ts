import { getLocalStorageItem, hexToRGB } from "../../../_helper/index";

export const PolarAreaData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "Dataset #1",
      backgroundColor: [
        hexToRGB(getLocalStorageItem("color-primary", "#0F626A"), 0.5),
        "rgba(249,193,35,0.5)",
        "rgba( 65, 150, 250,0.5)",
      ],
      data: [-10, -54, 40, 20, 56, 55, -40],
    },
  ],
};
