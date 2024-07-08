import { backgroundColor } from "../Fields/backgroundColor";
import { address, contactNumber, email } from "../Fields/contactInfo";

export const ContactInfo = {
  slug: "contactInfo",
  labels: {
    singular: "Contact Info Block",
    plural: "Contact Info Blocks",
  },
  fields: [
    backgroundColor,
    {
      name: "heading",
      label: "Contact Heading",
      type: "richText",
      required: true,
    },
    address,
    email,
    contactNumber,
  ],
};
