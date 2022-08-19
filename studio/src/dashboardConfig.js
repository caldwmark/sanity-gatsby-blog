export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62ffe37f3a95cb2adb50e4f8",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-iomp7ytk",
                  apiId: "20c59093-1997-4715-acb0-6a4e0e918518",
                },
                {
                  buildHookId: "62ffe38082d48a2a57ef6450",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-8eqzv1t1",
                  apiId: "ce5dc9b1-d54c-4af7-a16d-8a376a07a324",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/caldwmark/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-8eqzv1t1.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
