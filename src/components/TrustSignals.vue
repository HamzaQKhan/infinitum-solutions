<script setup>
const logos = [
  { icon: 'solar:box-minimalistic-linear', name: 'AcmeCorp' },
  { icon: 'solar:globus-linear', name: 'Vortex' },
  { icon: 'solar:layers-linear', name: 'Layer' },
  { icon: 'solar:planet-linear', name: 'Sphere' },
]
</script>

<template>
  <section
    class="py-10 border-y dark:border-white/5 dark:bg-white/[0.01] overflow-hidden reveal border-slate-200 bg-white"
  >
    <div class="max-w-7xl mx-auto px-6 text-center mb-8">
      <p class="text-xs font-semibold text-slate-500 tracking-wider uppercase">
        Trusted by forward-thinking teams
      </p>
    </div>

    <div
      class="trust-mask relative w-full overflow-hidden select-none"
    >
      <div
        class="trust-marquee flex flex-nowrap gap-12 items-center opacity-40 dark:opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
      >
        <template v-for="(logo, i) in [...logos, ...logos, ...logos, ...logos]" :key="i">
          <div class="flex items-center gap-2 flex-shrink-0">
            <iconify-icon
              :icon="logo.icon"
              class="text-2xl dark:text-white text-slate-900"
            />
            <span class="font-bold text-lg dark:text-white tracking-tight text-slate-900">
              {{ logo.name }}
            </span>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
.trust-mask {
  -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
  mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
}
.trust-mask:hover .trust-marquee {
  animation-play-state: paused;
}

.trust-marquee {
  width: max-content;
  animation: trustMarquee 25s linear infinite;
}

@keyframes trustMarquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-100% / 4)); }
}
</style>
