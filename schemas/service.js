export default {
  name: 'service',
  title: 'services',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: "field",
      title: "Field",
      type: "string",
      options: {
        list: [
          { title: "Beauty", value: "beauty"},
          { title: "Hair", value: "hair"},
          { title: "Esthetic", value: "esthetic"},
        ],
        layout: "radio"
      }
    },
    {
      name: 'preise',
      title: 'Preise',
      type: 'reference',
      to: {type: 'price'},
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    /*{
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },*/
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {field} = selection
      return Object.assign({}, selection, {
        subtitle: field && `Entdecken sie unser ${field} Service`,
      })
    },
  },
}
