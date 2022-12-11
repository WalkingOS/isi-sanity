export default {
  name: 'price',
  title: 'Prices',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: "upto",
      title: "Upto",
      type: "boolean",
    },
    {
      name: 'Terminlink',
      type: 'object',
      title: 'Terminlink',
      fields: [
        {
          name: 'href',
          type: 'url',
          title: 'URL'
        },
        {
          title: 'Open in new tab',
          name: 'blank',
          description: 'Termine für die Leistung',
          type: 'boolean'
        }
      ]
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
