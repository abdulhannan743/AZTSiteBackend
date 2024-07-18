import { Block } from "payload/types";
import { TwoColumn } from "./TwoColumn";

export const Analytics: Block = {
  slug: "analytics",
  labels: {
    singular: "analytics Block",
    plural: "analytics Blocks",
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
      name: "content",
      label: "content",
      type: "blocks",
      blocks: [TwoColumn],
    },
  ],
};
