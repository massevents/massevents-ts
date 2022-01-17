export default {
  name: "partnerGroup",
  type: "object",
  title: "Partner Group",
  options: {
    collapsible: true,
    collapsed: true,
    columns: 1,
  },
  fields: [
    {
      name: "type",
      title: "Titel",
      type: "string",
    },

    {
      name: "sponsorType",
      type: "string",
      title: "Type",
      options: {
        list: ["photo", "text"],
        layout: "radio",
        direction: "horizontal",
      },
    },
    {
      title: "Sponsors",
      name: "sponsors",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "sponsor" }],
        },
      ],
    },
  ],
};
