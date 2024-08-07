import { GlobalConfig } from "payload/types";
import { link } from "../Fields/Link";
import { ContactInfo } from "../blocks/ContactInfo";
import Content from "../blocks/Content";
import { Hero } from "../blocks/Hero";
import { ImageSlider } from "../blocks/ImageSlider";
import { SimpleRichText } from "../blocks/SimpleRichText";
import { TwoColumn } from "../blocks/TwoColumn";
import { TypographyAndParaGraph } from "../blocks/TypographyAndParaGraph";

export const Footer: GlobalConfig = {
  slug: "footer",
  label: {
    singular: "Footer",
    plural: "Footers",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "layout",
      label: "Layout",
      type: "blocks",
      blocks: [
        Hero,
        TwoColumn,
        Content,
        ImageSlider,
        TypographyAndParaGraph,
        ContactInfo,
        SimpleRichText,
      ],
      required: true,
    },
    {
      name: "navLinksHeading",
      label: "Nav Links Heading",
      type: "text",
    },
    {
      name: "navLinks",
      label: "Nav Links",
      type: "array",
      fields: [
        {
          name: "label",
          label: "Label",
          type: "text",
        },
        {
          name: "link",
          label: "Link",
          type: "relationship",
          relationTo: "pages",
        },
        {
          name: "parent",
          label: "Parent Page",
          type: "relationship",
          relationTo: "pages",
        },
      ],
    },
    {
      name: "linksHeading",
      label: "Links Heading",
      type: "text",
    },
    link,
  ],
};
