export default {
    title: 'Button',
    name: 'button',
    type: 'object',
    fields: [
      { 
        name: 'label', 
        type: 'string', 
        title: 'Label', 
        validation: (rule: any) => rule.required()
      },
      { 
        name: 'path', 
        type: 'string', 
        title: 'Url', 
        validation: (rule: any) => rule.required()
      },
      {
        type: 'string',
        name: 'buttonType',
        validation: (rule: any) => rule.required(),
        options: {
          list: [
            { title: 'Gradient', value: 'gradient' },
            { title: 'Text gradient', value: 'text-gradient' },
          ],
        },
    },
    ],
    options: {
      collapsible: true,
      collapsed: true,
    },
  };
   