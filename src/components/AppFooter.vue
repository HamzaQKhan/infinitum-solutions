<script setup>
const productLinks = [
  { label: 'Features', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Changelog', href: '#' },
]
const companyLinks = [
  { label: 'About', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Careers', href: '#' },
]
const legalLinks = [
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
  { label: 'Security', href: '#' },
]
const socialIcons = [
  { icon: 'solar:bomb-emoji-linear', href: '#' },
  { icon: 'solar:code-circle-linear', href: '#' },
  { icon: 'solar:link-circle-linear', href: '#' },
]
</script>

<template>
  <footer
    class="border-t dark:border-white/5 dark:bg-[#020203] py-12 text-sm reveal border-slate-200 bg-slate-50"
  >
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div class="col-span-2 md:col-span-1">
          <a href="#" class="flex items-center gap-2 mb-4 group">
            <div class="w-7 h-7 rounded flex items-center justify-center overflow-hidden shrink-0">
              <img src="/src/assets/logo-icon.webp" alt="Infinitum Solutions LLC Logo" class="w-full h-full object-contain" />
            </div>
            <span class="font-medium tracking-tight text-sm sm:text-2xl group-hover:opacity-80 transition-opacity text-[#0755e9]">
              Infinitum Solutions
              <span class="text-xs">LLC</span>
            </span>
          </a>
          <p class="text-slate-500 text-xs leading-relaxed">
            AI That Connects Your Team Smarter. Built for the future of remote work.
          </p>
        </div>
        <div>
          <h4 class="dark:text-white font-medium mb-4 text-slate-900">Product</h4>
          <ul class="space-y-2 text-slate-500">
            <li v-for="l in productLinks" :key="l.label">
              <a :href="l.href" class="hover:text-[#7969EB] dark:hover:text-white transition-colors">
                {{ l.label }}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="dark:text-white font-medium mb-4 text-slate-900">Company</h4>
          <ul class="space-y-2 text-slate-500">
            <li v-for="l in companyLinks" :key="l.label">
              <a :href="l.href" class="hover:text-[#7969EB] dark:hover:text-white transition-colors">
                {{ l.label }}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="dark:text-white font-medium mb-4 text-slate-900">Legal</h4>
          <ul class="space-y-2 text-slate-500">
            <li v-for="l in legalLinks" :key="l.label">
              <a :href="l.href" class="hover:text-[#7969EB] dark:hover:text-white transition-colors">
                {{ l.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="flex flex-col md:flex-row justify-between items-center pt-8 border-t dark:border-white/5 border-slate-200"
      >
        <p class="text-slate-500 dark:text-slate-600 text-xs">
          © 2026 Infinitum Solutions, Inc. All rights reserved.
        </p>
        <div class="flex gap-6 mt-4 md:mt-0">
          <a
            v-for="s in socialIcons"
            :key="s.icon"
            :href="s.href"
            class="dark:hover:text-white transition-colors text-slate-400 hover:text-slate-900"
          >
            <iconify-icon :icon="s.icon" width="16" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
