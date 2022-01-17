export default {
  name: "teamMember",
  type: "document",
  title: "Team Member",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Naam",
    },

    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 200,
        slugify: (input) => {
          const sluggified = input.toLowerCase().replace(/\s+/g, "-").slice(0, 200);
          return `team/${sluggified}`
        }
      },
    },

    {
      type: 'header',
      name: 'header',
      validation: (rule: any) => rule.required(),
  },
    {
      name: "email",
      type: "string",
      title: "E-mailadres",
    },
    {
      name: "roles",
      type: "string",
      title: "Rol(len)",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
    {
      name: "seo",
      type: "seo",
      title: "SEO",
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
