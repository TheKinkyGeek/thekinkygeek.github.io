import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Self Bondage Control",
  srcExclude: ['**/README.md'],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: '/images/logo_gen2_dark_1024.png',
      dark: '/images/logo_gen2_white_1024.png'
    },
    search: {
      provider: "local",
    },
    externalLinkIcon: true,
    outline: [2, 4],
    footer: {
      message: 'Content licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>.',
      copyright: 'Copyright &copy; 1999-2025 KinkyGeek'
    }
  },
  head: [
    [
      'link',
      { rel: 'icon', type: 'image/svg+xml', href: '/images/favicon.ico' }
    ],
  ],
  locales: {
    en: {
      label: 'English',
      lang: 'en',
      link: '/en'
    },
    de: {
      label: 'Deutsch',
      lang: 'de',
      link: '/de'
    }
  }
})
