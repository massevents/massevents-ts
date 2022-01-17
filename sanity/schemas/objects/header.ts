export default {
  name: "header",
  type: "object",
  title: "Header",
  options: {
    collapsible: true,
    collapsed: true,
    columns: 1
  },
  fields: [
    {
      title: "What do you want to show?",
      name: "headerType",
      type: "string",
      options: {
        list: [
          { title: "Video", value: "video" },
          { title: "Image", value: "image" },
          { title: "City", value: "city" },
          { title: "Nothing", value: "nothing" },
        ],
      },
    },
    {
      hidden: ({ parent }) => parent?.headerType === "nothing" || parent?.headerType === "city",
      name: "title",
      type: "string",
      title: "Header title",
    },
    {
      hidden: ({ parent }) => parent?.headerType === "nothing" || parent?.headerType === "city",
      name: "subtitle",
      type: "string",
      title: "Header subtitle",
    },
    {
      hidden: ({ parent }) => parent?.headerType !== "image",
      name: "imageSrc",
      type: "image",
      title: "Header afbeelding",
    },
    {
      hidden: ({ parent }) => parent?.headerType !== "video",
      name: "videoId",
      type: "string",
      title: "Youtube id (11 tekens)",
    },
    {
      hidden: ({ parent }) => parent?.headerType !== "video",
      name: "delay",
      type: "string",
      title: "Delay in seconds (not too much)",
    },
  ],
};
