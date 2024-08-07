import { Block } from "payload/types";
import { link } from "../Fields/Link";

export const MegaMenuBlock: Block = {
  slug: "megaMenu",
  labels: {
    singular: "Mega Menu Block",
    plural: "Mega Menu Blocks",
  },
  fields: [
    {
      name: "heading",
      label: "Heading",
      type: "text",
    },
    link,
    {
      name: "subMenuItems",
      label: "Sub Menu Items",
      type: "array",
      fields: [
        {
          name: "icon",
          label: "Icon",
          type: "upload",
          relationTo: "media",
        },
        {
          name: "title",
          label: "Title",
          type: "text",
        },
        {
          name: "description",
          label: "Description",
          type: "textarea",
        },
        {
          type: "row",
          fields: [
            {
              name: "page",
              label: "Page to link to",
              type: "relationship",
              relationTo: "pages",
              required: true,
              admin: {
                width: "50%",
              },
            },
            {
              name: "parent",
              label: "Parent Page",
              type: "relationship",
              relationTo: "pages",
            },
          ],
        },
      ],
    },
    {
      name: "subMenuLinks",
      label: "Sub Menu Links",
      type: "array",
      fields: [
        {
          name: "title",
          label: "Title",
          type: "text",
        },
        {
          name: "languagesLinks",
          label: "Languages Links",
          type: "array",
          fields: [link],
        },
      ],
    },
  ],
};
