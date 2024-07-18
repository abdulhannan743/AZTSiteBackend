import { link } from "../Fields/Link";
import { paragraph, typography } from "../Fields/typography";
import { Block } from "payload/types";

export const IndustriesContent: Block = {
  slug: "industries",
  labels: {
    singular: "Industry",
    plural: "Industries",
  },
  fields: [
    {
      name: "industries",
      label: "Industries",
      type: "group",
      fields: [
        {
          name: "heading",
          label: "Heading",
          type: "text",
        },
        {
          name: "content",
          label: "Content And Logo",
          type: "array",
          fields: [
            {
              name: "logo",
              label: "Logo",
              type: "upload",
              relationTo: "media",
            },
            typography,
            paragraph,
            link,
          ],
        },
      ],
    },
  ],
};
