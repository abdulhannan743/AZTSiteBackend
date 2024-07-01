import { GlobalConfig } from "payload/types";
import { link } from "../Fields/Link";

export const Header: GlobalConfig = {
  slug: "header",
  label: {
    singular: "Header",
    plural: "Headers",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "logo",
      label: "Logo",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "navLinks",
      label: "Nav Links",
      type: "array",
      fields: [
        {
          name: "label",
          label: "Label",
          type: "text",
        },
        {
          name: "link",
          label: "Link",
          type: "relationship",
          relationTo: "pages",
        },
        {
          name: "parent",
          label: "Parent Page",
          type: "relationship",
          relationTo: "pages",
        },
      ],
    },
    link,
  ],
};
