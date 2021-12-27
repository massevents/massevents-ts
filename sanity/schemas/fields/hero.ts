export default {
    title: 'Hero',
    name: 'hero',
    type: 'object',
    fields: [
      { name: 'title', type: 'string', title: 'Title (complete)' },
      { name: 'coloredPart', type: 'string', title: 'Part which need to be colored' },
      { name: 'description', type: 'richText', title: 'Text' },
      { name: 'buttons', type: 'array', of: [{type: 'button'}],}
    ],
    options: {
      collapsible: true,
      collapsed: true,
    },
  };
   