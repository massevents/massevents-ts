
export default {
  name: 'route',
  type: 'object',
  title: 'Misc.',
  options: {
    collapsible: true,
    collapsed: true,
    columns: 1
  },
  fields: [
    {
      name: 'includeInSitemap',
      type: 'boolean',
      title: 'Include page in sitemap',
      description: 'For search engines. Will be added to /sitemap.xml',
    },
    {
      name: 'disallowRobots',
      type: 'boolean',
      title: 'Disallow in robots.txt',
      description: 'Hide this route for search engines',
    },
  ]
};
