import { Block } from "payload/types";
import { link } from "../Fields/Link";

export const SectionWithTabs: Block = {
  slug: "sectionWithTabs",
  labels: {
    singular: "Section With Tabs",
    plural: "Section With Tabs",
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
    },
    {
      name: "iconName",
      label: "Icon Name",
      type: "text",
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
        {
          name: "items",
          label: "Items",
          type: "array",
          labels: {
            singular: "Item",
            plural: "Items",
          },
          fields: [
            {
              name: "title",
              label: "Title",
              type: "text",
              required: true,
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
        link,
      ],
    },
  ],
};
