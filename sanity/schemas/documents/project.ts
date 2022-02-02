export default {
  title: "Project",
  name: "project",
  type: "document",
  fields: [
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
        slugify: (input) => {
          const sluggified = input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .slice(0, 200);
          return `projecten/${sluggified}`;
        },
      },
    },
    {
      type: "string",
      name: "title",
      validation: (rule: any) => rule.required(),
    },
    {
      type: "string",
      name: "subtitle",
      validation: (rule: any) => rule.required(),
    },
    {
      type: "ticketshop",
      name: "ticketshop",
    },
    {
      type: "projectContent",
      name: "projectContent",
    },

    {
      type: "header",
      name: "header",
      validation: (rule: any) => rule.required(),
    },
    {
      type: "teaser",
      name: "teaser",
      validation: (rule: any) => rule.required(),
    },
    {
      type: "sponsors",
      name: "sponsors",
    },
    {
      type: "activities",
      name: "activiteiten",
    },

    {
      name: "logo",
      type: "image",
      title: "Logoafbeelding",
    },
    {
      name: "poster",
      type: "image",
      title: "Poster afbeelding",
    },
    {
      name: "photoAlbum",
      type: "array",
      of: [{ type: "image" }],
      title: "Fotoalbum",
    },

    // { type: 'blocks', name: 'blocks' },

    {
      type: "socialMedia",
      name: "socialMedia",
      title: "Social Media",
    },
    {
      type: "projectOverview",
      name: "previousEditions",
      title: "Eerdere edities",
      options: {
        collapsible: true,
        collapsed: true,
        columns: 1
      },
    },
    {
      type: "seo",
      name: "seo",
      title: "SEO",
      validation: (rule: any) => rule.required(),
    }
  ],

  preview: {
    select: {
      title: "title",
      media: "seo.openGraphImage",
    },
  },
};
