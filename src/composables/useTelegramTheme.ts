/**
 * Bridge the Telegram WebApp theme into CSS variables.
 *
 * Modern clients already set `--tg-theme-*` on the document, but older ones only
 * expose `themeParams`. Calling `useTelegramTheme()` once (e.g. in your app entry)
 * maps whatever the client provides onto the CSS variables vuegram reads, calls
 * `ready()`/`expand()`, and keeps them in sync on `themeChanged`. It is a safe
 * no-op outside Telegram (browser, SSR, tests).
 */

type ThemeParams = Record<string, string>

interface TelegramWebApp {
  ready?: () => void
  expand?: () => void
  themeParams?: ThemeParams
  colorScheme?: 'light' | 'dark'
  onEvent?: (event: string, handler: () => void) => void
  offEvent?: (event: string, handler: () => void) => void
}

function getWebApp(): TelegramWebApp | undefined {
  if (typeof window === 'undefined') return undefined
  return (window as unknown as { Telegram?: { WebApp?: TelegramWebApp } }).Telegram?.WebApp
}

function applyThemeParams(params: ThemeParams): void {
  const root = document.documentElement
  for (const [key, value] of Object.entries(params)) {
    // themeParams keys are snake_case (e.g. bg_color) → --tg-theme-bg-color.
    root.style.setProperty(`--tg-theme-${key.replace(/_/g, '-')}`, value)
  }
}

export function useTelegramTheme(): { isTelegram: boolean } {
  const wa = getWebApp()
  if (!wa) return { isTelegram: false }

  wa.ready?.()
  wa.expand?.()

  const sync = () => {
    if (wa.themeParams) applyThemeParams(wa.themeParams)
  }
  sync()
  wa.onEvent?.('themeChanged', sync)

  return { isTelegram: true }
}
