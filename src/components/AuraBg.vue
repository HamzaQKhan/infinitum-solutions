<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  if (window.UnicornStudio) return
  window.UnicornStudio = { isInitialized: false }
  const s = document.createElement('script')
  s.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js'
  s.onload = () => {
    if (!window.UnicornStudio.isInitialized) {
      window.UnicornStudio.init()
      window.UnicornStudio.isInitialized = true
    }
  }
  ;(document.head || document.body).appendChild(s)
})
</script>

<template>
  <div
    id="aura-bg"
    class="fixed top-0 w-full h-screen -z-10 transition-opacity duration-500"
  >
    <div
      class="aura-background-component top-0 w-full -z-10 absolute h-full"
      data-alpha-mask="80"
      style="mask-image: linear-gradient(to bottom, transparent, black 0%, black 80%, transparent); -webkit-mask-image: linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)"
    >
      <div
        data-us-project="ILgOO23w4wEyPQOKyLO4"
        class="absolute w-full h-full left-0 top-0 -z-10"
      />
    </div>
  </div>
</template>
