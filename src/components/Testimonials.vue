<script setup>
const items = [
  {
    quote:
      '"NeuraLink totally changed how we handle sprints. The AI suggestions are surprisingly accurate and have saved us hours of planning time every week."',
    name: 'Alex Chen',
    role: 'CTO, DevScale',
  },
  {
    quote:
      '"The interface is stunning, but the backend AI is where the magic happens. It feels like having a project manager who never sleeps."',
    name: 'Sarah Miller',
    role: 'Product Lead, Streamline',
  },
  {
    quote:
      '"We\'ve tried every tool out there. Nothing integrates this smoothly with our existing stack while adding actual intelligence."',
    name: 'James Wilson',
    role: 'Founder, NextGen',
  },
]
</script>

<template>
  <section class="py-24 max-w-7xl mx-auto px-6">
    <h2
      class="text-2xl font-semibold text-center dark:text-white mb-16 tracking-tight reveal text-slate-900"
    >
      Loved by remote teams worldwide
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="(t, i) in items"
        :key="i"
        :class="[
          'glass-panel p-6 rounded-xl border dark:border-white/5 hover:border-[#7969EB]/30 transition-colors reveal border-slate-200',
          i === 0 ? 'delay-100' : i === 1 ? 'delay-200' : 'delay-300',
        ]"
      >
        <div class="flex gap-1 mb-4 text-[#7969EB]">
          <iconify-icon v-for="j in 5" :key="j" icon="solar:star-bold" width="14" />
        </div>
        <p class="text-sm dark:text-slate-300 leading-relaxed mb-6 text-slate-600">
          {{ t.quote }}
        </p>
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-full dark:bg-slate-700 bg-slate-200" />
          <div>
            <p class="text-xs font-semibold dark:text-white text-slate-900">{{ t.name }}</p>
            <p class="text-[10px] text-slate-500">{{ t.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
