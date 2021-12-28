
export default {
  name: 'sponsors',
  type: 'object',
  title: 'Sponsors (Nieuwe functionaliteit)',
  options: {
    collapsible: true,
    collapsed: true,
    columns: 1
  },
  fields: [
    {
      name: 'titleSponsors',
      type: 'string',
      title: 'Titel boven sponsors'
    },
    {
      name: 'partners',
      title: 'Partners',
      type: 'array',
      of: [
        {
          name: 'partnerGroup',
          type: 'object',
          title: 'Partnergroep',
          fields: [
            {
              name: 'type',
              title: 'Titel',
              type: 'string'
            },

            {
              name: 'sponsorType',
              type: 'string',
              title: 'Type',
              options: {
                list: ['photo', 'text'],
                layout: 'radio',
                direction: 'horizontal'
              }
            },
            {
              title: 'Sponsors',
              name: 'sponsors',
              type: 'array',
              of: [{
                type: 'reference',
                to: [{type: 'sponsor'}]
              }]
            }
          ]
        }
      ]
    }
  ]
};
