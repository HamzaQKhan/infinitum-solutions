<script setup>
const features = [
  {
    icon: 'solar:list-check-linear',
    iconColor: 'text-[#7969EB]',
    iconBg: 'bg-[#7969EB]/12',
    iconBorder: 'border-[#7969EB]/20',
    accentBar: 'border-t-4 border-t-[#7969EB]',
    title: 'AI Task Prioritization',
    desc: 'Automatically sorts your daily tasks based on deadlines, complexity, and team availability.',
    span: 1,
    delay: 'delay-100',
    bigIcon: true,
  },
  {
    icon: 'solar:stars-linear',
    iconColor: 'text-purple-500',
    iconBg: 'bg-purple-500/12',
    iconBorder: 'border-purple-500/20',
    accentBar: 'border-t-4 border-t-purple-500',
    title: 'Smart Workflow Suggestions',
    desc: 'The AI analyzes bottlenecks in real-time and suggests instant optimizations to clear blockers before they become problems.',
    span: 2,
    delay: 'delay-200',
    hasVisual: true,
  },
  {
    icon: 'solar:chart-2-linear',
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-500/12',
    iconBorder: 'border-blue-500/20',
    accentBar: 'border-t-4 border-t-blue-500',
    title: 'Predictive Analytics',
    desc: 'Harness the power of data-driven insights with our Predictive Analytics solution. Anticipate trends, identify opportunities, and make informed decisions, driving your business forward in an ever-changing landscape.',
    span: 1,
    delay: 'delay-100',
  },
  {
    icon: 'solar:chat-round-dots-linear',
    iconColor: 'text-emerald-500',
    iconBg: 'bg-emerald-500/12',
    iconBorder: 'border-emerald-500/20',
    accentBar: 'border-t-4 border-t-emerald-500',
    title: 'Intelligent Automation',
    desc: 'Streamline operations and boost productivity with Intelligent Automation. Our AI-driven solution automates repetitive tasks, allowing your team to focus on strategic initiatives, reduce errors, and achieve operational excellence.',
    span: 1,
    delay: 'delay-200',
  },
  {
    icon: 'solar:link-circle-linear',
    iconColor: 'text-orange-500',
    iconBg: 'bg-orange-500/12',
    iconBorder: 'border-orange-500/20',
    accentBar: 'border-t-4 border-t-orange-500',
    title: 'PRS (Personalized Recommender System)',
    desc: 'Enhance user experiences and engagement with our Personalized Recommender System. Leverage machine learning algorithms to deliver tailored recommendations, increasing customer satisfaction and driving conversions in your digital platforms.',
    span: 1,
    delay: 'delay-300',
  },
]
</script>

<template>
  <section
    id="features"
    class="py-28 md:py-32 relative features-section-bg features-dot-grid overflow-hidden"
  >
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <!-- Header -->
      <div class="mb-20 md:mb-24 reveal">
        <div class="flex flex-col md:items-center md:text-center max-w-3xl md:mx-auto">
          <span
            class="inline-flex items-center gap-1.5 w-fit mb-5 px-3.5 py-1.5 rounded-full bg-[#7969EB]/10 dark:bg-[#7969EB]/20 border border-[#7969EB]/20 text-[#7969EB] dark:text-[#a5b4fc] text-xs font-semibold tracking-wide uppercase"
          >
            <iconify-icon icon="solar:bolt-circle-linear" class="text-sm" />
            Features
          </span>
          <h2
            class="text-3xl md:text-5xl font-bold dark:text-white mb-5 tracking-tight text-slate-900 leading-[1.15]"
          >
            Intelligence built into
            <span class="brand-gradient-text">every step.</span>
          </h2>
          <p class="text-white text-lg md:text-xl leading-relaxed">
            Stop managing tools and start managing work. NeuraLink's AI handles the busy work so you
            can focus on shipping.
          </p>
        </div>
      </div>

      <!-- Cards grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        <template v-for="(f, i) in features" :key="i">
          <div
            :class="[
              'group relative rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-white/[0.03] overflow-hidden reveal transition-all duration-500 ease-out',
              'hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200/60 dark:hover:shadow-[#7969EB]/5 hover:border-slate-300/80 dark:hover:border-white/15',
              f.accentBar,
              f.delay,
              f.span === 2 ? 'md:col-span-2' : '',
            ]"
          >
            <div class="p-8 md:p-10">
              <!-- Big background icon (AI Task only) -->
              <div
                v-if="f.bigIcon"
                class="absolute top-4 right-4 md:top-6 md:right-6 opacity-[0.06] dark:opacity-[0.08] pointer-events-none transition-opacity duration-500 group-hover:opacity-[0.1]"
              >
                <iconify-icon icon="solar:bolt-linear" class="text-[#7969EB]" width="120" />
              </div>

              <div
                :class="[
                  'w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border transition-all duration-500 ease-out group-hover:scale-110 group-hover:shadow-lg',
                  f.iconBg,
                  f.iconBorder,
                ]"
              >
                <iconify-icon :icon="f.icon" :class="f.iconColor" class="text-2xl" />
              </div>

              <template v-if="f.hasVisual">
                <div class="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
                  <div class="flex-1 min-w-0">
                    <h3 class="text-xl md:text-2xl font-bold dark:text-white mb-4 text-slate-900 tracking-tight">
                      {{ f.title }}
                    </h3>
                    <p class="text-slate-500 dark:text-slate-400 leading-relaxed text-base max-w-xl">
                      {{ f.desc }}
                    </p>
                  </div>

                  <!-- Suggestion Found card -->
                  <div
                    class="flex-1 w-full min-w-0 max-w-md flex rounded-2xl overflow-hidden bg-slate-50/80 dark:bg-white/[0.04] border border-slate-200/60 dark:border-white/10 transition-all duration-500 ease-out group-hover:shadow-xl group-hover:border-purple-500/20 dark:group-hover:border-purple-500/30"
                  >
                    <!-- Gradient left accent -->
                    <div
                      class="w-1 flex-shrink-0 bg-gradient-to-b from-purple-500 via-purple-400 to-blue-500"
                    />
                    <div class="p-5 flex flex-col gap-4">
                      <div class="flex items-center gap-2">
                        <span class="relative flex h-2 w-2">
                          <span
                            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-70"
                          />
                          <span class="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
                        </span>
                        <span class="text-[11px] font-bold tracking-widest uppercase text-purple-600 dark:text-purple-400">
                          Suggestion Found
                        </span>
                      </div>
                      <p class="text-sm dark:text-slate-200 text-slate-700 leading-snug">
                        Merge 2 similar <strong class="text-slate-900 dark:text-white">"Design Review"</strong> tasks — frees ~2h/week for the team.
                      </p>
                      <div
                        class="inline-flex items-center gap-1.5 w-fit px-2.5 py-1 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-[11px] font-semibold"
                      >
                        <iconify-icon icon="solar:graph-up-linear" />
                        High impact · 94% acceptance
                      </div>
                      <div class="flex gap-2 pt-1">
                        <button
                          type="button"
                          class="inline-flex items-center gap-2 px-4 py-2.5 brand-gradient-bg text-xs font-semibold rounded-xl text-white hover:shadow-lg hover:shadow-[#7969EB]/25 hover:opacity-95 active:scale-[0.98] transition-all duration-300"
                        >
                          <iconify-icon icon="solar:check-circle-linear" />
                          Apply
                        </button>
                        <button
                          type="button"
                          class="px-4 py-2.5 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 text-xs font-medium rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition-colors duration-300"
                        >
                          Dismiss
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </template>

              <template v-else>
                <h3 class="text-xl md:text-2xl font-bold dark:text-white mb-3 text-slate-900 tracking-tight">
                  {{ f.title }}
                </h3>
                <p class="text-slate-500 dark:text-slate-400 leading-relaxed text-base">
                  {{ f.desc }}
                </p>
              </template>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
