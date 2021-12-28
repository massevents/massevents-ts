export default {
  name: "projectContent",
  type: "object",
  title: "Project Content",
  options: {
    collapsible: true,
    collapsed: true,
    columns: 1
  },
  fields: [
    {
      title: "Standard or custom?",
      name: "contentType",
      type: "string",
      options: {
        list: [
          { title: "Standard", value: "standard" },
          { title: "Custom", value: "custom" }
        ],
      },
    },
    {
      hidden: ({ parent }) => parent?.contentType !== "custom",
      name: "customContent",
      type: "markdown",
      title: "Custom content",
    },
    {
      hidden: ({ parent }) => parent?.contentType !== "standard",
      name: "shortDescriptionTitle",
      type: "string",
      title: "Title for: Short Description",
    },
    {
      hidden: ({ parent }) => parent?.contentType !== "standard",
      name: "shortDescription",
      type: "markdown",
      title: "Short Description",
    },
    {
      hidden: ({ parent }) => parent?.contentType !== "standard",
      name: "massEventsTitle",
      type: "string",
      title: "Title for: What did Mass Events do?",
    },
    {
      hidden: ({ parent }) => parent?.contentType !== "standard",
      name: "massEvents",
      type: "markdown",
      title: "What did Mass Events do?",
    },
    
  ],
};
