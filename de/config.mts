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
          { text: 'Architektur', link: '/de/architecture' },
          { text: 'Safty', link: '/de/safty' },
          { 
            text: 'Module', link: '/de/modules',
            items:[
              { text: 'Control', link: '/de/modules/control' },
              { text: 'Estim', link: '/de/modules/estim' },
              { text: 'Supply', link: '/de/modules/supply' }
            ]
          },
          { text: 'Peripherie', link: '/de/periphery' },
          { 
            text: 'Topping', link: '/de/topping',
          },
          { text: 'Geschichte', link: '/de/history' },
        ]
      }
    ],
  },
})
