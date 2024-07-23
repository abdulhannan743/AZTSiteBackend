import { Block } from "payload/types";
import { OurCultureBlock } from "./OurCultureBlock";
import { AIDevelopmentTwoColumn } from "./AIDevelopmentTwoColumn";

export const DevelopmentPlanningBlock: Block = {
  slug: "DevelopmentPlanningBlock",
  labels: {
    singular: "Development Planning Block",
    plural: "Development Planning Blocks",
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
      name: "layout",
      label: "Layout",
      type: "blocks",
      blocks: [AIDevelopmentTwoColumn],
    },
  ],
};
