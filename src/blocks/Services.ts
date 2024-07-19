import { Block } from "payload/types";
import { link } from "../Fields/Link";

export const Services: Block = {
  slug: "services",
  labels: {
    singular: "Service",
    plural: "Services",
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "iconName",
      label: "Icon Name",
      type: "text",
      required: true,
    },
    {
      name: "tabs",
      label: "Tabs",
      type: "array",
      fields: [
        {
          name: "heading",
          label: "Tab Heading",
          type: "text",
          required: true,
        },
        {
          name: "title",
          label: "Tab Title",
          type: "text",
        },
        {
          name: "description",
          label: "Tab Description",
          type: "textarea",
        },
        link,
      ],
    },
  ],
};
