import { link } from "../Fields/Link";
import { backgroundColor } from "../Fields/backgroundColor";

export const CallToAction = {
  slug: "call-to-action",
  labels: {
    singular: "Call to Action",
    plural: "Calls to Action",
  },
  fields: [
    backgroundColor,
    {
      name: "content",
      type: "richText",
      label: "Content",
    },
    {
      name: "actions",
      label: "Actions",
      type: "array",
      minRows: 1,
      maxRows: 2,
      fields: [link],
    },
  ],
};
