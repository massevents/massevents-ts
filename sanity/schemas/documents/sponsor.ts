export default {
  name: "sponsor",
  type: "document",
  title: "Sponsor",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },

    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
        slugify: (input) => {
          const sluggified = input.toLowerCase().replace(/\s+/g, "-").slice(0, 200);
          return `sponsor/${sluggified}`
        }
      },
    },

    {
      name: "url",
      type: "string",
      title: "Url",
    },
    {
      name: "logo",
      type: "image",
      title: "Logo",
    },
    {
      name: "seo",
      type: "seo",
      title: "SEO",
    },
  ],
  preview: {
    select: {
      slug: 'slug.current',
      pageTitle: 'title',
      media: 'logo'
    },
    prepare({ slug, pageTitle, media }) {
      return {
        title: pageTitle,
        subtitle: `Slug: ${slug === '/' ? '/' : `/${slug}`}`,
        media: media
      }
    }
  }
};
