import DefaultTheme from 'vitepress/theme'
import './custom.css'
import MyButton from './components/MyButton.vue'

import BackToTopButton from '@miletorix/vitepress-back-to-top-button'
import '@miletorix/vitepress-back-to-top-button/style.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('MyButton', MyButton),
    app.use(BackToTopButton)
  }
}
