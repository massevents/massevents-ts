
export default {
    name: 'activities',
    type: 'object',
    title: 'Activiteiten',
    options: {
      collapsible: true,
      collapsed: true,
      columns: 1
    },
    fields: [
      {
        name: 'titleActivities',
        type: 'string',
        title: 'Titel boven activities'
      },
      {
        name: 'activities',
        title: 'Activiteiten',
        type: 'array',
        of: [{ type: 'string' }]
      }
    ]
  };
