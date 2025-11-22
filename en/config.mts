import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  description: "My (Kung Fu) personal notes on self bondage and self restraint techniques.",
  base: '/en/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/en' }
    ],
    sidebar: [
      {
        items: [
          { text: 'Intro', link: '/en/intro' },
          { text: 'Architecture', link: '/en/architecture' },
          { text: 'Safty', link: '/en/safty' },
          { 
            text: 'Module', link: '/en/modules',
            items:[
              { text: 'Control', link: '/en/modules/control' },
              { text: 'Estim', link: '/en/modules/estim' },
              { text: 'Supply', link: '/en/modules/supply' }
            ]
          },
          { text: 'Periphery', link: '/en/periphery' },
          { 
            text: 'Topping', link: '/en/topping',
          },
          { text: 'History', link: '/en/history' },
        ]
      }
    ],
  },
})
