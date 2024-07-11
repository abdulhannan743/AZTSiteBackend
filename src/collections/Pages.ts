import { Hero } from "../blocks/Hero";
import { TwoColumn } from "../blocks/TwoColumn";
import { SimpleRichText } from "../blocks/SimpleRichText";
import Content from "../blocks/Content";
import { CallToAction } from "../blocks/CallToAction";
import { ImageSlider } from "../blocks/ImageSlider";
import { TypographyAndParaGraph } from "../blocks/TypographyAndParaGraph";
import { ContactInfo } from "../blocks/ContactInfo";
import { CollectionConfig } from "payload/types";
import { ContactFormBlock } from "../blocks/ContactFormBlock";

export const Pages: CollectionConfig = {
  slug: "pages",
  labels: {
    singular: "Page",
    plural: "Pages",
  },
  admin: {
    useAsTitle: "name",
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
        SimpleRichText,
        Content,
        CallToAction,
        ImageSlider,
        TypographyAndParaGraph,
        ContactInfo,
        ContactFormBlock,
      ],
      required: true,
    },
  ],
};
