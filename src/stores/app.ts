import { reactive } from 'vue'

type UITheme = 'light' | 'dark' | null

const localTheme = localStorage.getItem('theme') as UITheme

export const appStore = reactive<{
  delay: number
  isErrorResp: boolean
  theme: UITheme
}>({
  delay: 0,
  isErrorResp: false,
  theme: localTheme,
})

function updateHeader(toDark: boolean) {
  let headerColorEl: HTMLMetaElement | null = document.querySelector(
    'meta[name="theme-color"]'
  )

  if (!headerColorEl) {
    headerColorEl = document.createElement('meta')
    headerColorEl.name = 'theme-color'
    document.querySelector('head')?.append(headerColorEl)
  }

  headerColorEl.content = toDark ? '#000' : '#fff'
}

/**
 * Функция выбора темы оформления приложения
 * @param {string} theme - название темы
 */
function selectTheme(theme?: UITheme) {
  if (!theme && localStorage.getItem('theme')) localStorage.removeItem('theme')

  if (theme) localStorage.setItem('theme', theme)

  appStore.theme = theme || null
  if (!document || !window) return

  const htmlEl = document.querySelector('html')
  const osThemeIsDark = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches

  if (theme === 'dark' || (osThemeIsDark && theme !== 'light')) {
    htmlEl?.classList.add('dark')
  } else if (theme === 'light' || !osThemeIsDark) {
    htmlEl?.classList.remove('dark')
  }
}

export function toggleTheme() {
  const isDark =
    appStore.theme === 'dark' ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches &&
      !appStore.theme)

  selectTheme(isDark ? 'light' : 'dark')
  updateHeader(isDark)
}
