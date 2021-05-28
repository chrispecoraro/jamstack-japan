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
                    "60b0a26f04e11591c8aba8ab",
                  title: "Sanity Studio",
                  name: "jamstack-japan-studio",
                  apiId: "216c404e-f142-4e38-98ca-82978f496287",
                },
                {
                  buildHookId: "60b0a26f55163a9a313ec718",
                  title: "Blog Website",
                  name: "jamstack-japan-web",
                  apiId: "15f7d5bb-7252-41bc-87cf-22c26b5ca1b2",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/chrispecoraro/jamstack-japan",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://jamstack-japan-web.netlify.app",
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
