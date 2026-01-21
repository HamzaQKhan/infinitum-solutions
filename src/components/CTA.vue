<script setup>
import { ref } from 'vue'

const email = ref('')

const onSubmit = () => {
  if (!email.value.trim()) return
  // Placeholder: handle signup
  console.log('Join list:', email.value)
  email.value = ''
}
</script>

<template>
  <section id="join" class="py-24 relative overflow-hidden">
    <div class="max-w-4xl mx-auto px-6 text-center relative z-10 reveal">
      <h2
        class="text-4xl md:text-5xl font-semibold dark:text-white tracking-tight mb-6 text-slate-900"
      >
        Ready to work smarter?
      </h2>
      <p class="text-white text-lg mb-10">
        Join the waiting list today and get our free guide on "AI-First Productivity".
      </p>

      <form
        class="max-w-md mx-auto relative flex items-center"
        @submit.prevent="onSubmit"
      >
        <iconify-icon
          icon="solar:letter-linear"
          class="absolute left-4 text-slate-400"
          width="18"
        />
        <input
          v-model="email"
          type="email"
          placeholder="Enter your email address"
          class="w-full dark:bg-white/5 border dark:border-white/10 rounded-full py-3.5 pl-11 pr-32 text-sm dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-[#7969EB] transition-colors shadow-sm bg-white border-slate-200 text-slate-900"
        />
        <button
          type="submit"
          class="absolute right-1.5 top-1.5 bottom-1.5 px-5 dark:bg-white dark:text-black text-xs font-semibold rounded-full dark:hover:bg-slate-200 transition-colors bg-slate-900 text-white hover:bg-slate-800"
        >
          Claim Your Spot
        </button>
      </form>
      <p class="text-[10px] text-slate-500 dark:text-slate-600 mt-4">
        No spam, ever. Unsubscribe anytime.
      </p>
    </div>

    <div
      class="absolute bottom-0 left-0 w-64 h-64 bg-[#7969EB]/10 blur-[100px] pointer-events-none"
    />
    <div
      class="absolute top-0 right-0 w-64 h-64 bg-[#1859EB]/10 blur-[100px] pointer-events-none"
    />
  </section>
</template>
