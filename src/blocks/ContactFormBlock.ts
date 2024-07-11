import { Block } from "payload/types";
import { link } from "../Fields/Link";

export const ContactFormBlock: Block = {
  slug: "contactFormBlock",
  labels: {
    singular: "Contact Form Block",
    plural: "Contact Form Blocks",
  },
  graphQL: {
    singularName: "ContactFormBlock",
  },
  fields: [
    {
      name: "offices",
      type: "array",
      label: "Offices",
      fields: [
        {
          name: "officeName",
          type: "text",
          label: "Office Name",
          required: true,
        },
        {
          name: "officeAddress",
          type: "text",
          label: "Office Address",
          required: true,
        },
        {
          name: "officeImage",
          type: "upload",
          relationTo: "media",
          label: "Office Image",
          required: true,
        },
        link,
      ],
    },
    {
      name: "title",
      type: "text",
      label: "Title",
      required: true,
    },
    {
      name: "subtitle",
      type: "text",
      label: "Subtitle",
      required: true,
    },
    {
      name: "description",
      type: "text",
      label: "Description",
      required: true,
    },
    {
      name: "contactForm",
      type: "relationship",
      relationTo: "forms",
      required: true,
    },
  ],
};
