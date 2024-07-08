import { Block } from "payload/types";
import { backgroundColor } from "../Fields/backgroundColor";

export const ImageSlider: Block = {
  slug: "slider",
  labels: {
    singular: "Image Slider",
    plural: "Images Slider",
  },
  fields: [
    backgroundColor,
    {
      name: "slides",
      label: "Slides",
      labels: {
        singular: "Slide",
        plural: "Slides",
      },
      type: "array",
      minRows: 1,
      maxRows: 9,
      fields: [
        {
          type: "upload",
          name: "media",
          relationTo: "media",
          required: true,
        },
      ],
    },
  ],
};
