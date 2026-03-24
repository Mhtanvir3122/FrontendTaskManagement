import { getLocalStorageItem, hexToRGB } from "../../../_helper/index";

export const PieData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "Dataset #1",
      backgroundColor: [
        hexToRGB(getLocalStorageItem("color-dark", "#28232D"), 0.5),
        "rgba(225,78,90,0.5)",
        "rgba( 65, 150, 250,0.5)",
      ],
      data: [-20, -54, 20, 0, 56, 55, -40],
    },
  ],
};
