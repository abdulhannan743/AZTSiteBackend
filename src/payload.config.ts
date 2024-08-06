import path from "path";

import { buildConfig } from "payload/config";
import seoPlugin from "@payloadcms/plugin-seo";

import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";

import Users from "./collections/Users";
import { Pages } from "./collections/Pages";
import { Media } from "./collections/Media";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { BlogPosts } from "./collections/BlogPosts";
import { Footer } from "./globals/Footer";
import { Header } from "./globals/Header";
import formBuilder from "@payloadcms/plugin-form-builder";
import { File } from "./Fields/File";

export default buildConfig({
  serverURL: "http://localhost:4000",
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: lexicalEditor({}),
  collections: [Users, Pages, Media, BlogPosts],
  globals: [Header, Footer],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [
    seoPlugin({
      collections: ["pages"],
      uploadsCollection: "media",

      fields: [
        {
          name: "keywords",
          label: "Keywords",
          type: "text",
        },
      ],
    }),
    formBuilder({
      fields: {
        payment: false,
        File,
      },
      redirectRelationships: ["pages"],
      // The redirectRelationships property is an array of collection slugs that, when enabled,
      //are populated as options in the form's redirect field. This field is used to redirect the
      //user to a dedicated confirmation page upon form submission (optional).
    }),
  ],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  cors: ["http://localhost:3000"],
});
