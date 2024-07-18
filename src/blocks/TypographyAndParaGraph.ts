import { Block } from "payload/types";
import { backgroundColor } from "../Fields/backgroundColor";
import { paragraph, typography } from "../Fields/typography";

export const TypographyAndParaGraph = {
  slug: "typographyAndParaGraph",

  labels: {
    singular: "Typography And ParaGraph",
    plural: "Typography And ParaGraphs",
  },
  fields: [backgroundColor, typography, paragraph],
};
