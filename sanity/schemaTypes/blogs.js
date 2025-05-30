import { defineField, defineType } from "sanity";

export const blogSchema = defineType({
    name: "blogs",
    title: "Blogs",
    type: "document",
    fields: [
        defineField({
            name: 'blogs',
            type: 'string',
            validation: rule => rule.min(3)
        }),
        defineField({
            name: 'description',
            type: 'string',
        }),
        defineField({
            name: 'body',
            type: 'text',
        }),
    ],
})