<script setup>
const plans = [
  {
    name: 'Starter',
    desc: 'For individuals',
    price: '$0',
    period: '',
    features: ['3 Projects', 'Basic AI suggestions', 'Community Support'],
    featureBold: false,
    button: 'Current Plan',
    buttonPrimary: false,
    popular: false,
    delay: 'delay-100',
  },
  {
    name: 'Pro',
    desc: 'For small teams',
    price: '$12',
    period: '/mo',
    features: ['Unlimited Projects', 'Advanced AI Insights', 'Integrations'],
    featureBold: true,
    button: 'Join Beta',
    buttonPrimary: true,
    popular: true,
    delay: 'delay-200',
  },
  {
    name: 'Business',
    desc: 'For organizations',
    price: '$29',
    period: '/mo',
    features: ['SSO & Security', 'Dedicated Success Manager', 'Custom AI Models'],
    featureBold: false,
    button: 'Contact Sales',
    buttonPrimary: false,
    popular: false,
    delay: 'delay-300',
  },
]
</script>

<template>
  <section id="pricing" class="py-24 relative">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16 reveal">
        <h2
          class="text-3xl font-semibold dark:text-white mb-4 tracking-tight text-slate-900"
        >
          Simple, transparent pricing
        </h2>
        <p class="text-white">
          Start for free, scale when you need to.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div
          v-for="(p, i) in plans"
          :key="i"
          :class="[
            'p-8 rounded-2xl border relative reveal shadow-sm dark:shadow-none',
            p.popular
              ? 'border-[#7969EB]/30 dark:bg-[#0E0E12] shadow-xl shadow-[#7969EB]/5 bg-slate-50'
              : 'dark:border-white/5 dark:bg-[#0A0A0C] border-slate-200 bg-white',
            p.delay,
          ]"
        >
          <div
            v-if="p.popular"
            class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full brand-gradient-bg text-[10px] font-medium shadow-lg text-white"
          >
            Most Popular
          </div>
          <h3 class="text-lg font-medium dark:text-white text-slate-900">{{ p.name }}</h3>
          <p class="text-sm text-slate-500 mb-6">{{ p.desc }}</p>
          <div class="text-3xl font-medium dark:text-white mb-6 text-slate-900">
            {{ p.price }}<span v-if="p.period" class="text-sm text-slate-500 font-normal">{{ p.period }}</span>
          </div>
          <ul class="space-y-3 mb-8">
            <li
              v-for="(f, j) in p.features"
              :key="j"
              class="flex items-center gap-2 text-sm dark:text-slate-400 text-slate-600"
              :class="p.featureBold ? 'dark:text-slate-300 text-slate-700' : ''"
            >
              <iconify-icon
                :icon="p.featureBold ? 'solar:check-circle-bold' : 'solar:check-circle-linear'"
                :class="p.featureBold ? 'text-[#7969EB]' : 'dark:text-slate-600 text-slate-400'"
              />
              {{ f }}
            </li>
          </ul>
          <button
            type="button"
            :class="[
              'w-full py-2 rounded-lg text-sm transition-all',
              p.buttonPrimary
                ? 'brand-gradient-bg hover:opacity-90 shadow-lg shadow-[#7969EB]/20 text-white'
                : 'border dark:border-white/10 dark:text-white border-slate-200 text-slate-700 dark:hover:bg-white/5 hover:bg-slate-50',
            ]"
          >
            {{ p.button }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
