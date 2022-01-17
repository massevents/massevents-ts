
export default {
    name: 'twoColTwoTitle',
    type: 'object',
    title: 'Two-column (2 titles)',
    options: {
      collapsible: true,
      collapsed: true,
      columns: 1
    },
    fields: [
      {
        name: 'leftTitle',
        type: 'string',
        title: 'Linker Titel'
      },
      {
        name: 'leftSubtitle',
        type: 'string',
        title: 'Linker Subtitel'
      },
        {
          name: 'leftCol',
          type: 'markdown',
          title: 'Left col'
        },
        {
          name: 'rightTitle',
          type: 'string',
          title: 'Rechter Titel'
        },
        {
          name: 'rightSubtitle',
          type: 'string',
          title: 'Rechter Subtitel'
        },
        {
          name: 'rightCol',
          type: 'markdown',
          title: 'Right col'
        },
      
    ]
  };
