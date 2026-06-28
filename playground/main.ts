import { createApp } from 'vue'

import Vuegram, { useTelegramTheme } from '../src/index'

import App from './App.vue'

useTelegramTheme() // no-op outside Telegram
createApp(App).use(Vuegram).mount('#app')
