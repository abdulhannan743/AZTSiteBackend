import { Block } from "payload/types";
//custom file field for form builder plugin
export const File: Block = {
  fields: [
    {
      fields: [
        {
          name: "name",
          label: "Name (lowercase, no special characters)",
          required: true,
          type: "text",
          admin: {
            width: "50%",
          },
        },
        {
          name: "label",
          label: "Label",
          localized: true,
          type: "text",
          admin: {
            width: "50%",
          },
        },
      ],
      type: "row",
    },
    {
      fields: [
        {
          name: "width",
          label: "Field Width (percentage)",
          type: "number",
          admin: {
            width: "50%",
          },
        },
        {
          name: "defaultValue",
          admin: {
            width: "50%",
          },
          label: "Default Value",
          localized: true,
          type: "text",
        },
      ],
      type: "row",
    },
  ],
  labels: {
    plural: "Custom Upload Fields",
    singular: "Custom Upload Field",
  },
  slug: "file",
};
