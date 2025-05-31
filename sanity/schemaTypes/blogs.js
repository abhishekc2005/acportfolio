import { defineField, defineType } from "sanity";

export const blogSchema = defineType({
    name: "blogs",
    title: "Blogs",
    type: "document",
    fields: [
        defineField({
            name: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'Slug',
            type: 'slug',
            options: { source: 'Title' },

        }),
        defineField({
            name: 'Date',
            type: 'date',
            options: {
                dateFormat: 'DD-MM-YYYY'
            }
        }),
        defineField({
            name: 'Tag',
            type: 'string',
            options: {
                list: ['JavaScript', 'React', 'Sanity', 'Life Lessons'],
                layout: 'radio'
            }
        }),
        defineField({
            name: 'body',
            type: 'array',
            of: [{ type: 'block' }]
        }),
        defineField({
            name: 'Image',
            type: 'image',
        }),
    ],
})