export default {
  title: 'News',
  name: 'news',
  type: 'document',
  fields: [

    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, 
        slugify: (input) => {
          const sluggified = input.toLowerCase().replace(/\s+/g, "-").slice(0, 200);
          return `nieuws/${sluggified}`
        }
      }
    }, 

    {
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: [{type: 'teamMember'}]
    },
    {
        type: 'string',
        name: 'title',
        validation: (rule: any) => rule.required(),
    },
    {
        type: 'string',
        name: 'subtitle',
        validation: (rule: any) => rule.required(),
    },
    {
      type: "markdown",
      description: "Body text",
      name: "description"
    },
    {
        type: 'header',
        name: 'Header',
        validation: (rule: any) => rule.required(),
    },
    {
        type: 'teaser',
        name: 'Teaser',
        validation: (rule: any) => rule.required(),
    },
    {
      name: 'photoAlbum',
      type: 'array',
      of: [{ type: 'image' }],
      title: 'Fotoalbum'
    },
    // { type: 'blocks', name: 'blocks' },
    {
      type: 'seo',
      name: 'seo',
      title: 'SEO',
      validation: (rule: any) => rule.required(),
    },
    {
      type: 'route',
      name: 'route',
      title: 'Misc.',
      validation: (rule: any) => rule.required(),
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'seo.openGraphImage',
    },
  },
};
