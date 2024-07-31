import { Block } from "payload/types";
import { link } from "../Fields/Link";

export const HomeHeroBlock: Block = {
  slug: "homeSlider",
  labels: {
    singular: "Home Slider",
    plural: "Home Sliders",
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
    },
    {
      name: "description",
      label: "Description",
      type: "text",
    },
    link,
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
