# vuegram

**Vue 3 component library for Telegram Mini Apps.** Native Telegram look with zero
config — components style themselves from the client's `--tg-theme-*` variables and
fall back to sensible light/dark defaults everywhere else (browser, tests, SSR).

> A Vue counterpart to the React [`@telegram-apps/telegram-ui`](https://github.com/Telegram-Mini-Apps/TelegramUI).
> No Tailwind or CSS framework required — every component ships its own scoped styles.

## Install

```bash
npm i vuegram
```

`vue@^3.4` is a peer dependency.

## Usage

```ts
// main.ts
import { createApp } from 'vue'
import Vuegram, { useTelegramTheme } from 'vuegram'
import 'vuegram/style.css'
import App from './App.vue'

useTelegramTheme() // sync the Telegram theme into CSS vars (no-op outside Telegram)
createApp(App).use(Vuegram).mount('#app')
```

```vue
<template>
  <TgHeader title="Profile" subtitle="Your account" />
  <TgSection header="Settings">
    <TgCell title="Notifications" subtitle="enabled" clickable />
  </TgSection>
  <TgButton @click="save">Save</TgButton>
</template>
```

Prefer explicit imports? Skip the plugin and import what you use:

```ts
import { TgButton, TgCell } from 'vuegram'
import 'vuegram/style.css'
```

## Components

| Component    | Notes                                                       |
| ------------ | ----------------------------------------------------------- |
| `TgButton`   | `variant`: `primary` \| `secondary` \| `destructive`        |
| `TgCell`     | list row; `title` / `subtitle` / `after` slots, `clickable` |
| `TgSection`  | grouped card with optional `header` / `footer`              |
| `TgHeader`   | screen title + subtitle                                     |
| `TgSpinner`  | centered loading state with optional `label`                |

## Theming

Telegram injects `--tg-theme-*` CSS variables when your Mini App runs inside a
client. `useTelegramTheme()` maps `themeParams` onto those variables for older
clients and re-syncs on `themeChanged`. Override any variable yourself to rebrand.

## Develop

```bash
npm install
npm run dev        # playground at localhost:5173
npm test           # vitest
npm run build      # dist/ (ESM + CJS + types + css)
```

## Roadmap

This is a `0.0.x` scaffold extracted from a production Mini App. Planned: more
components (inputs, switch, segmented control, list, avatar, badge), a Histoire
gallery, and a published npm release.

## License

[MIT](./LICENSE) © leansii
