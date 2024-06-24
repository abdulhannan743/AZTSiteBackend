// const color = {
//   blue: "#0D4C8F",
//   black: "#000000",
//   seaGreen: "#20C897",
//   grye: "#666666",
//   drakGrey: "#1D2746",
// };

export const backgroundColor = {
  name: "backgroundColor",
  type: "radio",
  label: "Background Color",
  defaultValue: "none",
  admin: {
    layout: "horizontal",
  },
  options: [
    {
      label: "None",
      value: "none",
    },
    {
      label: "Blue",
      value: "blue",
    },
    {
      label: "SeaGreen",
      value: "seaGreen",
    },
    {
      label: "Black",
      value: "black",
    },
    {
      label: "Grey",
      value: "grye",
    },
    {
      label: "DarkGrey",
      value: "drakGrey",
    },
  ],
};
