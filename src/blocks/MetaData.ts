import { CollectionConfig } from "payload/types";
import { paragraph, typography } from "../Fields/typography";

export const MetaData: CollectionConfig = {
  slug: "metaData",
  labels: {
    singular: "Meta Data",
    plural: "Meta Data",
  },
  fields: [
    {
      name: "matadata",
      label: "Meta Data",
      type: "group",
      fields: [
        {
          name: "heading",
          label: "Heading",
          type: "text",
        },
        {
          name: "typoPara",
          label: "Typography And Paragraph",
          type: "array",
          fields: [typography, paragraph],
        },
      ],
    },
  ],
};
