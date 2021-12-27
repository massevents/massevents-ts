export default {
  title: "Button",
  name: "button",
  type: "object",
  fields: [
    {
      name: "label",
      type: "string",
      title: "Label",
      validation: (rule: any) => rule.required(),
    },
    {
      name: "path",
      type: "string",
      title: "Url",
      validation: (rule: any) => rule.required(),
    },
  ],
  options: {
    collapsible: true,
    collapsed: true,
  },
};
