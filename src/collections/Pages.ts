import { Hero } from "../blocks/Hero";
import { TwoColumn } from "../blocks/TwoColumn";
import { SimpleRichText } from "../blocks/SimpleRichText";
import Content from "../blocks/Content";
import { CallToAction } from "../blocks/CallToAction";
import { ImageSlider } from "../blocks/ImageSlider";
import { TypographyAndParaGraph } from "../blocks/TypographyAndParaGraph";
import { ContactInfo } from "../blocks/ContactInfo";
import { MetaData } from "../blocks/MetaData";
import { IndustriesContent } from "../blocks/IndustriesContent";
import { CollectionConfig } from "payload/types";
import { ContactFormBlock } from "../blocks/ContactFormBlock";
import { SectionWithTabs } from "../blocks/SectionWithTabs";
import { SectionWithCards } from "../blocks/SectionWithCards";
import { Analytics } from "../blocks/Analytics";
import { coreValuesBlock } from "../blocks/coreValuesBlock";
import { TeamBlock } from "../blocks/TeamBlock";
import { OurCultureBlock } from "../blocks/OurCultureBlock";
import { DevelopmentPlanningBlock } from "../blocks/WebDevelopmentPlanningBlock";
import { DevelopersSection } from "../blocks/DevelopersSection";
import { HomeHeroBlock } from "../blocks/HomeHeroBlock";

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
        SectionWithCards,
        SectionWithTabs,
        MetaData,
        IndustriesContent,
        Analytics,
        coreValuesBlock,
        TeamBlock,
        OurCultureBlock,
        DevelopmentPlanningBlock,
        DevelopersSection,
        HomeHeroBlock,
      ],
      required: true,
    },
  ],
};
