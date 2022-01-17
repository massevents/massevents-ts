export default {
  type: 'object',
  name: 'projectOverview',
  title: 'ProjectOverview',
  fields: [
    {
      name: 'headingTitle',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'headingSubTitle',
      type: 'string',
      title: 'Subtitle'
    },
    
    {
      title: "What do you want to show?",
      name: "projectsType",
      type: "string",
      options: {
        list: [
          { title: "Show All", value: "all" },
          { title: "Show Recent", value: "recent" },
          { title: "Show custom", value: "projects" },
        ],
      },
    },
    {
      hidden: ({ parent }) => parent?.projectsType !== "projects",
      title: "Select the project(s))",
      name: 'projects',
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "project" }],
        },
      ],
    },
    {
      name: "format",
      type: "string",
      title: "How do you wanna show it?",
      options: {
        list: ["poster", "projectblock"],
        layout: "radio",
        direction: "horizontal",
      },
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
      title: 'headingTitle',
      type: 'type'
    },
    prepare({ type, title }) {
      return {
        title: `Project overview block`,
        subtitle: `${title} (${type})`
      }
    }
  }
}
