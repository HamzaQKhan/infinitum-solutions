import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const SECTION_IDS = ['home', 'features', 'demo', 'join']
const OFFSET = 120 // px from top (below nav) to consider section "active"

export function useActiveSection() {
  const activeId = ref('home')
  let removeScroll = () => {}

  onMounted(() => {
    nextTick(() => {
      const onScroll = () => {
        const passing = SECTION_IDS.map((id) => ({ id, el: document.getElementById(id) }))
          .filter((s) => s.el)
          .filter((s) => s.el.getBoundingClientRect().top <= OFFSET)
        activeId.value = passing.length ? passing[passing.length - 1].id : 'home'
      }
      window.addEventListener('scroll', onScroll, { passive: true })
      onScroll()
      removeScroll = () => window.removeEventListener('scroll', onScroll)
    })
  })

  onUnmounted(() => removeScroll())

  return { activeId }
}
