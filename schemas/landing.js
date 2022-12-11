export default {
  name: 'landing',
  title: 'landing',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
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
      name: 'mainVideo',
      title: 'Main video',
      type: 'mux.video',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],

  preview: {
    /*
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
    },*/
  },
}
