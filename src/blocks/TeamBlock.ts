import { Block } from "payload/types";
import { link } from "../Fields/Link";

export const TeamBlock: Block = {
  slug: "team",
  labels: {
    singular: "Team Block",
    plural: "Team Blocks",
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
          name: "image",
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
          type: "text",
        },
      ],
    },
  ],
};
