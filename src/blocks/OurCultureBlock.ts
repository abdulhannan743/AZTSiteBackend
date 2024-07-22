import { Block } from "payload/types";
import { link } from "../Fields/Link";

export const OurCultureBlock: Block = {
  slug: "our culture",
  labels: {
    singular: "Our Culture Block",
    plural: "Our Culture Blocks",
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
      ],
    },
  ],
};
