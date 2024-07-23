import { Block } from "payload/types";
import { TwoColumn } from "./TwoColumn";

export const coreValuesBlock: Block = {
  slug: "coreValuesBlock",
  labels: {
    singular: "Core Value Block",
    plural: "Core Value Blocks",
  },
  fields: [
    {
      name: "heading",
      label: "Heading",
      type: "text",
    },

    {
      name: "content",
      label: "Content",
      labels: {
        singular: "Content",
        plural: "Contents",
      },
      type: "array",
      minRows: 1,
      maxRows: 9,
      fields: [
        {
          name: "layout",
          label: "Layout",
          type: "blocks",
          blocks: [TwoColumn],
          required: true,
        },
      ],
    },
  ],
};
