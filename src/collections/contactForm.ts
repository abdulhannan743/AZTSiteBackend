import { CollectionConfig } from "payload/types";

const ContactForms: CollectionConfig = {
  slug: "contact-forms",
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "email",
      type: "email",
      required: true,
    },
    {
      name: "phone",
      type: "number",
      required: true,
    },
    {
      name: "message",
      type: "textarea",
      required: true,
    },
    {
      name: "uploadFile",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};

export default ContactForms;
