import { Block } from "payload/types";
import { customDevelopment } from "../Fields/IoTDevelopment";

export const ProcessIoTDevelopment: Block = {
  slug: "processIoTDevelopment",
  labels: {
    singular: "Process IoT Development Block",
    plural: "Process IoT Development Blocks",
  },
  fields: [customDevelopment],
};
