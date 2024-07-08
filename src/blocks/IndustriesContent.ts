import { CollectionConfig } from "payload/types";
import { link } from "../Fields/Link";
import { paragraph, typography } from "../Fields/typography";

export const IndustriesContent: CollectionConfig = {
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
