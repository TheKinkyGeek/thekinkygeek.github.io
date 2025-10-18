import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  description: "My (Kung Fu) personal notes on self bondage and self restraint techniques.",
  base: '/de/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/de' }
    ],
    sidebar: [
      {
        items: [
          { text: 'Intro', link: '/de/intro' },
        ]
      }
    ],
  },
})
