
export default {
  name: 'sponsors',
  type: 'object',
  title: 'Sponsors',
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
          type: "partnerGroup"
        }
      ]
    }
  ]
};
