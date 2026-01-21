<script setup>
import { inject } from 'vue'
import { useTheme } from '../composables/useTheme'

const { toggleTheme } = useTheme()
const activeId = inject('activeSection')
</script>

<template>
  <nav
    class="fixed top-0 w-full z-50 border-b border-slate-200/50 dark:border-white/10 bg-white/25 dark:bg-slate-900/20 backdrop-blur-xl transition-all duration-300 reveal active"
  >
    <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <a href="#home" class="flex items-center gap-2 group">
        <div
          class="w-7 h-7 rounded flex items-center justify-center text-[11px] font-semibold tracking-tighter text-white"
        >
          <img src="/src/assets/logo-icon.webp" alt="Infinitum Solutions LLC Logo">
        </div>
        <span
          class="font-medium tracking-tight text-sm sm:text-2xl group-hover:opacity-80 transition-opacity text-[#0755e9]"
        >
          Infinitum Solutions
          <span class="text-xs">LLC</span>
        </span>
      </a>

      <div class="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
        <a
          href="#home"
          :class="[
            'hover:opacity-80 transition-opacity',
            activeId === 'home'
              ? 'text-[#0755e9] dark:text-[#3b82f6]'
              : 'text-slate-600 dark:text-slate-400 hover:text-[#1859EB] dark:hover:text-white',
          ]"
        >
          Home
        </a>
        <a
          href="#features"
          :class="[
            'transition-colors',
            activeId === 'features'
              ? 'text-[#0755e9] dark:text-[#3b82f6]'
              : 'text-slate-600 dark:text-slate-400 hover:text-[#1859EB] dark:hover:text-white',
          ]"
        >
          Solutions
        </a>
        <a
          href="#demo"
          :class="[
            'transition-colors',
            activeId === 'demo'
              ? 'text-[#0755e9] dark:text-[#3b82f6]'
              : 'text-slate-600 dark:text-slate-400 hover:text-[#1859EB] dark:hover:text-white',
          ]"
        >
          About Us
        </a>
        <a
          href="#join"
          :class="[
            'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-sm',
            activeId === 'join'
              ? 'bg-white dark:bg-white border-[#0755e9] dark:border-[#3b82f6] text-[#0755e9] dark:text-[#3b82f6] border-2'
              : 'bg-white text-slate-800 dark:bg-white dark:text-slate-900 border border-slate-200/80 dark:border-white/30 hover:bg-slate-50 dark:hover:bg-slate-100',
          ]"
        >
          Contact Us
        </a>
      </div>

      <div class="flex items-center gap-2">
        <button
          type="button"
          aria-label="Toggle theme"
          @click="toggleTheme"
          class="p-2 rounded-full text-slate-500 dark:hover:bg-white/10 transition-colors hover:bg-slate-100 dark:hover:bg-white/5"
        >
          <iconify-icon icon="solar:sun-2-linear" class="hidden dark:block text-xl" />
          <iconify-icon icon="solar:moon-linear" class="block dark:hidden text-xl" />
        </button>
      </div>
    </div>
  </nav>
</template>
