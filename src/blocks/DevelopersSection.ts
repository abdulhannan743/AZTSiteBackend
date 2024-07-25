import { Block } from "payload/types";
import { link } from "../Fields/Link";

export const DevelopersSection: Block = {
  slug: "developersSection",
  labels: {
    singular: "Developer Section",
    plural: "Developers Section",
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "tabs",
      label: "Tabs",
      type: "array",
      fields: [
        {
          name: "label",
          label: "Label",
          type: "text",
          required: true,
        },
        {
          name: "value",
          label: "Value",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "developers",
      label: "Developers",
      type: "array",
      fields: [
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
        {
          name: "skills",
          label: "Skills",
          type: "array",
          fields: [
            {
              name: "title",
              label: "Title",
              type: "text",
              required: true,
            },
          ],
        },
        {
          name: "image",
          label: "Image",
          type: "upload",
          relationTo: "media",
        },
        link,
      ],
    },
  ],
};
