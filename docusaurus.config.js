// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Open Workbook",
  tagline: "Public documentation for Apart Research",
  url: "https://docs.apartresearch.com",
  baseUrl: "/docs",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Apart Research Workbook",
        logo: {
          alt: "Apart Logo",
          src: "img/ideas_icon.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
          },
          {
            href: "https://github.com/apartresearch/docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Intro to the workbook",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://apartresearch.com/join",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/apartresearch",
              },
              {
                label: "Github",
                href: "https://github.com/apartresearch",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/channel/UCnfBOJnTkE9sgjMOOsQbi2w",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                href: "https://apartresearch.com/blog",
              },
              {
                label: "Home page",
                href: "https://apartresearch.com",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Apart Research`,
      },
      prism: {
        theme: require("prism-react-renderer/themes/github"),
        darkTheme: require("prism-react-renderer/themes/dracula"),
        defaultLanguage: "python",
      },
    }),
};

module.exports = config;
