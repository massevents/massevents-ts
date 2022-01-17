
export default {
    name: 'oneColOneTitle',
    type: 'object',
    title: 'One-column',
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
          name: 'col',
          type: 'markdown',
          title: 'Column'
        },
      
    ]
  };
