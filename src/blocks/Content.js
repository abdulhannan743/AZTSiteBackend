import Slider from "./ImageSlider";
import { link } from "../Fields/Link";
import { backgroundColor } from "../Fields/backgroundColor";

export const Content = {
  slug: "content",
  labels: {
    singular: "Content Block",
    plural: "Content Blocks",
  },
  fields: [
    backgroundColor,
    {
      type: "row",
      fields: [
        {
          name: "paddingTop",
          label: "Padding Top",
          type: "select",
          defaultValue: "medium",
          options: [
            {
              label: "None",
              value: "none",
            },
            {
              label: "Small",
              value: "small",
            },
            {
              label: "Medium",
              value: "medium",
            },
            {
              label: "Large",
              value: "large",
            },
          ],
          admin: {
            width: "50%",
          },
        },
        {
          name: "paddingBottom",
          label: "Padding Bottom",
          type: "select",
          defaultValue: "medium",
          options: [
            {
              label: "None",
              value: "none",
            },
            {
              label: "Small",
              value: "small",
            },
            {
              label: "Medium",
              value: "medium",
            },
            {
              label: "Large",
              value: "large",
            },
          ],
          admin: {
            width: "50%",
          },
        },
      ],
    },
    {
      name: "Image",
      label: "Image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "columns",
      type: "array",
      minRows: 1,
      labels: {
        singular: "Column",
        plural: "Columns",
      },
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "width",
              label: "Column Width",
              type: "select",
              defaultValue: "full",
              required: true,
              options: [
                {
                  label: "One Third",
                  value: "oneThird",
                },
                {
                  label: "Half",
                  value: "half",
                },
                {
                  label: "Two Thirds",
                  value: "twoThirds",
                },
                {
                  label: "Full Width",
                  value: "full",
                },
              ],
              admin: {
                width: "50%",
              },
            },
            {
              name: "alignment",
              label: "Alignment",
              type: "select",
              defaultValue: "left",
              required: true,
              options: [
                {
                  label: "Left",
                  value: "left",
                },
                {
                  label: "Center",
                  value: "center",
                },
                {
                  label: "Right",
                  value: "right",
                },
              ],
              admin: {
                width: "50%",
              },
            },
          ],
        },
        {
          name: "content",
          type: "richText",
          required: true,
        },
      ],
    },
    link,
  ],
};

export default Content;
