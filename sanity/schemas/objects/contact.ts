
export default {
    name: 'contact',
    type: 'object',
    title: 'Contact',
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
          name: 'address',
          type: 'markdown',
          title: 'Adresgegevens'
        },
      {
        name: 'team',
        title: 'Team Member',
        type: 'array',
        of: [{ 
            type: "reference",
            to: [{ type: "teamMember" }], }]
      }
    ]
  };
