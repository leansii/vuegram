# Contributing to vuegram

Thanks for helping! vuegram is a small, focused Vue 3 component library for
Telegram Mini Apps.

## Setup

```bash
npm install
npm run dev     # playground
npm test        # vitest
```

## Guidelines

- **One concern per component.** Keep components presentational and themeable.
- **No CSS framework.** Style with scoped CSS and `--tg-theme-*` variables only,
  with light/dark fallbacks in `src/style.css` so components render anywhere.
- **Types matter.** Props are typed via `defineProps`; the build emits `.d.ts`.
- Run `npm run format`, `npm test`, and `npm run build` before opening a PR.
- Add a test under `src/components/__tests__/` for new behavior.

## Adding a component

1. `src/components/TgThing.vue` with typed props + scoped styles.
2. Export it from `src/index.ts` (and register it in the plugin map).
3. Demo it in `playground/App.vue` and document it in the README table.
