export default {
    title: 'Rich Text',
    name: 'richText',
    type: 'array',
    of: [
      {
        type: 'block',
        marks: {
          decorators: [
            { title: 'Strong', value: 'strong' },
            { title: 'Emphasis', value: 'em' },
            { title: 'Code', value: 'code' },
            { title: 'Highlight', value: 'highlight' }
          ]
        }
      }
    ]
  };
  