import formatSlug from "../Utilities/formateSlug";

export const slug = {
  name: "slug",
  label: "Slug",
  type: "text",
  admin: {
    position: "sidebar",
  },
  hooks: {
    beforeValidate: [formatSlug("title")],
  },
};
