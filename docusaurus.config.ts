import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Klar',
  tagline: 'Ambiguity is more dangerous than verbosity.',
  favicon: 'img/favicon.ico',

  url: 'https://klarlang.github.io',
  baseUrl: '/website/',

  organizationName: 'KlarLang', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-br'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://github.com/KlarLang/website/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/KlarLang/website/tree/main/',

          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
      disableSwitch: false,
    },

    navbar: {
      title: 'Klar',
      logo: { alt: 'Klar', src: 'img/logo.svg' },
      items: [
        { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Docs' },
        { to: 'docs/get-started/install', label: 'Get Started', position: 'left' },
        { to: 'docs/diagnostics', label: 'Diagnostics', position: 'left' },
        { to: 'docs/author', label: 'Author', position: 'left' },
        //{ type: 'localeDropdown', position: 'right' },
        { href: 'https://github.com/KlarLang/Klar', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Introduction', to: '/docs/intro' },
            { label: 'Manifest', to: '/docs/intro/manifest' },
            { label: 'Implicit Behavior is Technical Debt', to: '/docs/intro/implicit-behavior-is-technical-debt' },
            { label: 'Hello World', to: '/docs/get-started/hello-world' },
            { label: 'Diagnostics', to: '/docs/diagnostics' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'GitHub', href: 'https://github.com/KlarLang/Klar' },
          ],
        },
        {
          title: 'Project',
          items: [
            { label: 'Author', to: '/docs/author' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Klar.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
