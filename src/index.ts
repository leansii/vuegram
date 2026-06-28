import type { App } from 'vue'

import './style.css'

import TgButton from './components/TgButton.vue'
import TgCell from './components/TgCell.vue'
import TgHeader from './components/TgHeader.vue'
import TgSection from './components/TgSection.vue'
import TgSpinner from './components/TgSpinner.vue'

export { TgButton, TgCell, TgHeader, TgSection, TgSpinner }
export { useTelegramTheme } from './composables/useTelegramTheme'

const components = { TgButton, TgCell, TgHeader, TgSection, TgSpinner }

/** Vue plugin: `app.use(Vuegram)` registers every component globally. */
export default {
  install(app: App): void {
    for (const [name, component] of Object.entries(components)) {
      app.component(name, component)
    }
  },
}
