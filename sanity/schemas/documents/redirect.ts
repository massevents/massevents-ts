export default {
  title: 'Redirect',
  name: 'redirect',
  type: 'document',
  fields: [

    {
        type: 'string',
        name: 'url',
        validation: (rule: any) => rule.required(),
    },
    {
        type: 'string',
        name: 'urlToRedirectTo',
        validation: (rule: any) => rule.required(),
    },
 
  ],

  preview: {
    select: {
      title: 'url',
    },
  },
};
