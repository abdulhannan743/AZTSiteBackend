import { Block } from "payload/types";
import { link } from "../Fields/Link";

export const SectionWithCards: Block = {
  slug: "section-with-cards",
  labels: {
    singular: "Section With Cards",
    plural: "Section With Cards",
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
    link,
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
          name: "iconName",
          label: "Icon Name / Designation",
          type: "text",
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
