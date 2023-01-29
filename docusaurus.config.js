// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "CRUGG's Wiki",
  tagline: "A little bit of everything",
  favicon: "img/favicon.ico",

  url: "https://w.crg.sh",
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

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
          editUrl: "https://github.com/OfficialCRUGG/personal-wiki/tree/main/",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/OfficialCRUGG/personal-wiki/tree/main/",
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
      // Replace with your project's social card
      image: "img/social-card.png",
      navbar: {
        title: "CRUGG's Wiki",
        logo: {
          alt: "CRUGG's Wiki",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "tech/tech",
            position: "left",
            label: "Tech",
          },
          {
            type: "doc",
            docId: "psychology/psychology",
            position: "left",
            label: "Psychology",
          },
          {
            type: "doc",
            docId: "misc/misc",
            position: "left",
            label: "Misc",
          },
          {
            type: "doc",
            docId: "homework/homework",
            position: "left",
            label: "Homework",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            type: "search",
            position: "right",
          },
          {
            to: "contact",
            position: "right",
            label: "Contact me",
          },
        ],
      },
      footer: {
        style: "light",
        copyright: `Copyright © ${new Date().getFullYear()} Dennis Paulus. Licensed under the MIT License. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
};

module.exports = config;
