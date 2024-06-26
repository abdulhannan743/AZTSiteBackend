import { link } from "../Fields/Link";

export const Hero = {
  slug: "hero",
  labels: {
    singular: "Hero Block",
    plural: "Hero Blocks",
  },
  fields: [
    {
      name: "Image",
      label: "Image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "heading",
      label: "Heading",
      type: "text",
    },
    {
      name: "text",
      label: "Text",
      type: "textarea",
    },
    link,
  ],
};
