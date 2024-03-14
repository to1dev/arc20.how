// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: '原子协议',
    tagline: '开启比特币新纪元',
    favicon: 'img/atom.svg',

    // Set the production url of your site here
    url: 'https://arc20.how',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'facebook', // Usually your GitHub org/user name.
    projectName: 'docusaurus', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'zh-Hans',
        locales: ['en', 'zh-Hans'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    //editUrl:
                    //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    //editUrl:
                    //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/arc20-social-card.png',
            navbar: {
                title: '原子协议',
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/atom.svg',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: '指南',
                    },
                    { to: '/blog', label: '博客', position: 'left' },
                    {
                        href: 'https://github.com/to1dev/arc20.how',
                        label: '贡献',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: '文档',
                        items: [
                            {
                                label: '指南',
                                to: '/docs/guidebook',
                            },
                        ],
                    },
                    {
                        title: '社区',
                        items: [
                            {
                                label: '推特',
                                href: 'https://x.com/atomicalsxyz',
                            },
                            {
                                label: 'Telegram',
                                href: 'https://t.me/AtomicalsProtocol',
                            },
                            {
                                label: 'Discord',
                                href: 'https://discordapp.com/invite/docusaurus',
                            },
                        ],
                    },
                    {
                        title: '链接',
                        items: [
                            {
                                label: '协议',
                                href: 'https://atomicals.xyz',
                            },
                            {
                                label: '源码',
                                href: 'https://github.com/atomicals',
                            },
                        ],
                    },
                ],
                copyright: `&copy; 2023-${new Date().getFullYear()} 协议遵循MIT许可证, 网站由ARC20社区维护`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
            colorMode: {
                disableSwitch: true,
                defaultMode: 'light',
            },
        }),

    plugins: [[require.resolve('docusaurus-lunr-search'), { languages: ['en', 'zh'] }]],

    scripts: [
        /*{
            src: 'js/fonts.js',
            async: true,
            defer: true,
            'data-some-attribute': 'some-value',
        },*/
        {
            src: 'js/lunr.stemmer.support.js',
            async: true,
        },
        {
            src: 'js/lunr.zh.js',
            async: true,
        }
    ],
};


export default config;
