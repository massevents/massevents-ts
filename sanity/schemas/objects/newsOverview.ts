export default {
  type: "object",
  name: "newsOverview",
  title: "News Overview",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "subtitle",
      type: "string",
      title: "Subtitle",
    },
    {
      title: "What do you want to show?",
      name: "newsType",
      type: "string",
      options: {
        list: [
          { title: "Show All", value: "all" },
          { title: "Show Recent", value: "recent" },
          { title: "Show custom", value: "news" },
        ],
      },
    },
    {
      hidden: ({ parent }) => parent?.newsType !== "news",
      title: "Select the news(s))",
      name: 'news',
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "news" }],
        },
      ],
    },
    {
      title: "Do we need a button?",
      name: "button_enable",
      type: "boolean",
    },

    {
      hidden: ({ parent }) => !parent?.button_enable,
      name: "button_url",
      type: "reference",
      to: [{ type: "page" }],
      title: "Overview URL",
    },

    {
      hidden: ({ parent }) => !parent?.button_enable,
      name: "button_label",
      type: "string",
      title: "Label Button",
    },
  ],
  preview: {
    select: {
      title: "headingTitle",
      type: "type",
    },
    prepare({ type, title }) {
      return {
        title: `News overview block`,
        subtitle: `${title} (${type})`,
      };
    },
  },
};
