
export default {
  name: 'socialMedia',
  type: 'object',
  title: 'Socials',
  options: {
    collapsible: true,
    collapsed: true,
    columns: 1
  },
  fields: [
    {
      name: 'facebookUrl',
      type: 'string',
      title: 'Facebook Url'
    },

    {
      name: 'instagramUrl',
      type: 'string',
      title: 'Instagram Url'
    },

    {
      name: 'linkedinUrl',
      type: 'string',
      title: 'Linkedin Url'
    },
    {
      name: 'spotifyUrl',
      type: 'string',
      title: 'Spotify Url'
    },

    {
      name: 'websiteUrl',
      type: 'string',
      title: 'Website Url'
    }
  ]
}