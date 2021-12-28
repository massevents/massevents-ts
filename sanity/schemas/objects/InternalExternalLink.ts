export default {
  type: "object",
  name: "InternalExternalLink",
  title: "InternalExternalLink",
  fields: [
    {
      title: "What do you want to show?",
      name: "linkType",
      type: "string",
      options: {
        list: [
          { title: "Internal Link", value: "internalLink" },
          { title: "External Link", value: "externalLink" },
        ],
      },
    },
    {
      hidden: ({parent}) => parent?.linkType !== 'internalLink',
      name: "internalLink",
      description: "Select the page",
      type: "reference",
      to: [{ type: "page" }],
    },
    {
      hidden: ({parent}) => parent?.linkType !== 'externalLink',
      name: "externalLink",
      description: "Enter the link",
      type: "ExternalLink",
    },
  ],
  preview: {
    select: {
      title: "linkType",
      externalLink: "externalLink",
      internalLink: "internalLink.title"
    },
    prepare: ({title, externalLink, internalLink}) => {
      const isExternalLink = title === 'externalLink'
      const externalLinkTitle = externalLink?.label ?? ''
      const internalLinkTitle = internalLink ?? ''

      return {
        title: `${isExternalLink ? externalLinkTitle : internalLinkTitle} (${isExternalLink ? 'External' : 'Internal'})`,
      }
    }
  },
};
