import { CollectionConfig } from "payload/types";

export const Media: CollectionConfig = {
  slug: "media",
  labels: {
    singular: "Media",
    plural: "Media",
  },
  upload: true,
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: "alt",
      label: "Alt",
      type: "text",
      required: true,
    },
  ],
};
