export default {
  title: 'Page',
  name: 'page',
  type: 'document',
  fields: [

    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => input
                             .toLowerCase()
                             .replace(/\s+/g, '-')
                             .slice(0, 200)
      }
    }, 
    {
        type: 'string',
        name: 'title',
        validation: (rule: any) => rule.required(),
    },

    {
      type: 'header',
      name: 'Header',
      validation: (rule: any) => rule.required(),
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
