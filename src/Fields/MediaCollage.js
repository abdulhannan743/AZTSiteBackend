export const MediaCollage = {
  slug: "media-collage",
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
      maxRows: 3,
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
