
export default {
  name: 'teaser',
  type: 'object',
  title: 'Teaser',
  options: {
    collapsible: true,
    collapsed: true,
    columns: 1
  },
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Teaser title',
      description: 'This will be displayed on overview pages etc.',
    },
    {
      name: 'description',
      type: 'markdown',
      title: 'Teaser description',
      description: 'This will be displayed on overview pages etc.',
    },
    {
      name: 'imageSrc',
      type: 'image',
      title: 'Teaser afbeelding'
    },
  ]
};
