import { BlogPosts } from "./BlogPosts";
import { Hero } from "../blocks/Hero";
import { TwoColumn } from "../blocks/TwoColumn";

export const Pages = {
    slug: 'pages',
    labels:{
        singular: 'Page',
        plural: 'Pages'
    },
    admin:{
        useAsTitle: 'name'
    },
    access:{
        read: () => true
    },
    fields:[
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            required: true,
        },
        {
            name: 'slug',
            label: 'Slug',
            type: 'text',
            required: true,
            admin: {
                position: 'sidebar',
              }
        },
        {
            name: 'layout',
            label: 'Layout',
            type: 'blocks',
            blocks: [
                Hero,
                TwoColumn,
            ],
            required: true,
        }
    ]

}