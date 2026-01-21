import { ref, onMounted, watch } from 'vue'

const isDark = ref(false)

export function useTheme() {
  const toggleTheme = () => {
    const html = document.getElementById('html-root')
    if (!html) return
    html.classList.toggle('dark')
    isDark.value = html.classList.contains('dark')

    const aura = document.getElementById('aura-bg')
    if (aura) {
      aura.style.opacity = isDark.value ? '1' : '0.7'
    }

    try {
      localStorage.setItem('neuralink-theme', isDark.value ? 'dark' : 'light')
    } catch (_) {}
  }

  onMounted(() => {
    const html = document.getElementById('html-root')
    if (!html) return

    let stored = null
    try {
      stored = localStorage.getItem('neuralink-theme')
    } catch (_) {}

    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)')?.matches
    const shouldBeDark = stored === 'dark' || (stored !== 'light' && prefersDark)

    if (shouldBeDark) {
      html.classList.add('dark')
      isDark.value = true
    } else {
      html.classList.remove('dark')
      isDark.value = false
    }

    const aura = document.getElementById('aura-bg')
    if (aura) {
      aura.style.opacity = isDark.value ? '1' : '0.7'
    }
  })

  return { isDark, toggleTheme }
}
