export default {
  __experimental_actions: ['update', 'create', 'publish'],
  title: 'Homepage',
  name: 'homepage',
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
        type: 'string',
        name: 'color',
        validation: (rule: any) => rule.required(),
        options: {
          list: [
            { title: 'Pink', value: 'pink' },
            { title: 'Green', value: 'green' },
          ],
        },
    },
    { type: 'blocks', name: 'blocks' },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
