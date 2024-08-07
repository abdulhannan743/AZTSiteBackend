import { Block } from "payload/types";
import { link } from "../Fields/Link";

export const Hero: Block = {
  slug: "hero",
  labels: {
    singular: "Hero Block",
    plural: "Hero Blocks",
  },
  fields: [
    {
      name: "Image",
      label: "Image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "heading",
      label: "Heading",
      type: "text",
    },
    {
      name: "text",
      label: "Text",
      type: "textarea",
    },
    link,
    {
      name: "slides",
      label: "Slides",
      type: "array",
      labels: {
        singular: "Slide",
        plural: "Slides",
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
          type: "textarea",
        },
        {
          name: "image",
          label: "Image",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
  ],
};
