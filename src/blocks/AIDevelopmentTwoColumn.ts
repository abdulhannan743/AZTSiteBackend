import { Block } from "payload/types";
import { TeamBlock } from "./TeamBlock";

export const AIDevelopmentTwoColumn: Block = {
  slug: "twoColumn",
  labels: {
    singular: "AI Development Two Column Block",
    plural: "AI Development Two Column Blocks",
  },
  fields: [
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
    {
      name: "icon",
      label: "Icon",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "image",
      label: "Image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "direction",
      label: "Direction",
      type: "select",
      options: [
        {
          label: "Default",
          value: "default",
        },
        {
          label: "Reverse",
          value: "reverse",
        },
      ],
    },
  ],
};
