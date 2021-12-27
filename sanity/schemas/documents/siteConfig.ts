export default {
  __experimental_actions: ['update', 'create', 'publish'],
  name: 'site-config',
  type: 'document',
  title: 'Site configuration',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Site title'
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      description: 'The main site url. Used to create canonical url'
    },
    {
      title: 'Main navigation',
      name: 'mainNavigation',
      description: 'Select pages for the top menu',
      validation: Rule => [
        Rule.max(5).warning('Are you sure you want more than 5 items?'),
        Rule.unique().error('You have duplicate menu items'),
        Rule.required()
      ],
      type: 'array',
      of: 
      [{type: 'InternalExternalLink'}],
    }
  ]
}
