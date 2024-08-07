import { CollectionConfig } from "payload/types";

const MediaCollage: CollectionConfig = {
  slug: "media-collage",
  type: "array",
  labels: {
    singular: "Media Collage",
    plural: "Media Collages",
  },
  fields: [
    {
      name: "media",
      label: "Media",
      type: "array",
      minRows: 3,
      maxRows: 10,
      fields: [
        {
          type: "upload",
          name: "media",
          relationTo: "media",
          required: true,
        },
      ],
    },
  ],
};

export default MediaCollage;
