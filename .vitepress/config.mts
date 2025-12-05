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
    },
    socialLinks: [
      // You can add any icon from simple-icons (https://simpleicons.org/):
      { icon: 'github', link: 'https://github.com/TheKinkyGeek' },
      { icon: 'twitter', link: 'https://twitter.com/KinkyGeek_' },
      {
        icon: {
          svg: '<svg height="2500" viewBox=".12664386 -3.71233998 15.75044407 19.71433998" width="1667" xmlns="http://www.w3.org/2000/svg"><path d="m15.06 7.812c0 3.38-4.04 5.176-7.06 8.19-3.02-3.014-7.06-4.81-7.06-8.19 0-.704.207-1.36.563-1.91a6.565 6.565 0 0 1 -.075-2.259 7.462 7.462 0 0 1 .577-1.985 8.386 8.386 0 0 1 .706-1.276c.089-.131.181-.26.279-.382-.018.155-.026.31-.03.464a7.546 7.546 0 0 0 .082 1.351 5.83 5.83 0 0 0 .473 1.609 4.119 4.119 0 0 0 .565.884c.128-.014.258-.021.389-.021 1.951 0 3.531 1.638 3.531 1.638s1.58-1.638 3.53-1.638c.132 0 .263.007.391.021.062-.072.122-.148.18-.227.143-.198.273-.418.386-.657a5.831 5.831 0 0 0 .473-1.609 7.57 7.57 0 0 0 .083-1.351 5.503 5.503 0 0 0 -.03-.464c.098.122.19.25.28.382a8.385 8.385 0 0 1 .706 1.276c.267.606.474 1.267.576 1.984.05.359.073.731.061 1.114a6.361 6.361 0 0 1 -.139 1.145c.356.55.563 1.207.563 1.91z" fill="currentColor"/></svg>'
        },
        link: 'https://fetlife.com/KinkyGeek_'
      }
    ]
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
