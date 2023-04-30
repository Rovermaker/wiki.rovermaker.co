// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LEARN',
  tagline: 'Focus on coding',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://rovermaker.co',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Rovermaker', // Usually your GitHub org/user name.
  projectName: 'wiki.rovermaker.co', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {

          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        //title: 'LEARN',
        logo: {
          alt: 'Rovermaker Logo',
          src: 'img/logo.svg',
          width: '70%',
          
        },
        items: [
          {href: 'https://rovermaker.co', label: 'เว็บไซต์หลัก Rovermaker.co', position: 'right'},

        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro/',
              },
            ],
          },
          {
            title: 'Rovermaker Channel',
            items: [
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UC7uBmULKAKZB1cRGPzXjkAg',
              },
              {
                label: 'facebook',
                href: 'https://www.facebook.com/themakerverse.co',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/makerverse_th',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://rovermaker.co/index.php/%e0%b8%9a%e0%b8%97%e0%b8%84%e0%b8%a7%e0%b8%b2%e0%b8%a1/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/rovermaker/',
              },
            ],
          },
        ],
        copyright: `Copyright ©2021~2023 Rovermaker, Inc. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
