import { Field } from "payload/types";

export const customDevelopment: Field = {
  name: "customDevelopmentData",
  label: "Custom Development Data",
  type: "array",
  minRows: 1,
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
      name: "iconHeading",
      label: "Icon Heading",
      type: "text",
    },
    {
      name: "iconText",
      label: "Icon Text",
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
  ],
};
