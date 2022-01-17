
export default {
    name: 'twoColQuote',
    type: 'object',
    title: 'Two-column with quote',
    options: {
      collapsible: true,
      collapsed: true,
      columns: 1
    },
    fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Titel'
        },
        {
          name: 'subtitle',
          type: 'string',
          title: 'Subtitel'
        },
        {
          name: 'leftCol',
          type: 'markdown',
          title: 'Left col'
        },
        {
          name: 'rightCol',
          type: 'markdown',
          title: 'Right col'
        },
        {
          name: 'quote',
          type: 'string',
          title: 'Quote'
        },
      
    ]
  };
