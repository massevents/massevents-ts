export default {
  title: 'SEO',
  name: 'seo',
  type: 'object',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'SEO titel',
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'SEO Description',
      description: 'This description populates meta-tags on the webpage',
    },
    {
      name: 'openGraphImage',
      type: 'image',
      title: 'SEO Open Graph Image',
      description: 'Image for sharing previews on Facebook, Twitter etc.',
    },
  ],

  preview: {
    select: {
      title: 'seoTitle',
      media: 'openGraphImage',
    },
  },
};
