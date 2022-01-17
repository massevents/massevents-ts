export default {
  type: 'object',
  name: 'imageSection',
  title: 'Image with link',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'link',
      type: 'InternalExternalLink',
      title: 'Call to action',
    },
  ]
};
