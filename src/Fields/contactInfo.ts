import { Field } from "payload/types";

export const address: Field = {
  name: "address",
  label: "Address",
  type: "array",
  minRows: 1,
  fields: [
    {
      name: "title",
      label: "Title",
      type: "richText",
    },
    {
      name: "Address",
      label: "Address",
      type: "textarea",
      required: true,
    },
  ],
};

export const email: Field = {
  name: "email",
  label: "Email",
  type: "array",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "richText",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      required: true,
    },
  ],
};

export const contactNumber: Field = {
  name: "contactNumber",
  label: "Contact Number",
  type: "array",
  minRows: 1,

  fields: [
    {
      name: "title",
      label: "Title",
      type: "richText",
    },
    {
      name: "contactNumber",
      label: "Contact Number",
      type: "number",
      required: true,
      // admin: {
      //   step: 1,
      // },
    },
  ],
};
