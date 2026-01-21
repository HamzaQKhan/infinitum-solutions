<script setup>
// Lottie — smooth animated, no blink (vector-based, robot/AI theme)
const lottieUrl = 'https://assets2.lottiefiles.com/packages/lf20_2cwDXD.json'
</script>

<template>
  <section id="home" class="md:pt-48 md:pb-32 pt-32 pb-20 min-h-[90vh] flex items-center overflow-hidden relative">
    <!-- Background glow (AuraBg behind shows through) -->
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] hero-glow pointer-events-none opacity-40 dark:opacity-60"
    />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
      <!-- Top text section (alag) -->
      <div class="flex flex-col text-center max-w-4xl mx-auto items-center mb-16 md:mb-20">
        <div
          class="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#fff]/20 bg-[#7969EB]/5 text-white text-[11px] font-semibold mb-8"
        >
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7969EB] opacity-75" />
            <span class="relative inline-flex rounded-full h-2 w-2 bg-[#1859EB]" />
          </span>
          New AI Solutions!
        </div>

        <h1
          class="reveal delay-100 leading-[1.1] title-gradient md:text-7xl text-5xl font-semibold tracking-tight mb-6 pb-2"
        >
          Empowering Your Business with AI Solutions.
        </h1>

        <p class="reveal delay-200 text-lg md:text-xl text-white max-w-2xl mb-10 leading-relaxed font-light">
          Unlocking the potential of your business: experience seamless integration and unmatched
          intelligence with our AI-powered transformations
        </p>

        <div class="reveal delay-300 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            type="button"
            class="w-full sm:w-auto group relative px-8 py-4 brand-gradient-bg text-sm font-semibold rounded-full hover:shadow-xl hover:shadow-[#1859EB]/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 ease-out text-white inline-flex items-center justify-center gap-2"
          >
            <span>See Solutions</span>
            <iconify-icon
              icon="solar:arrow-right-linear"
              class="text-lg shrink-0 group-hover:translate-x-0.5 transition-transform duration-300"
            />
          </button>
          <button
            type="button"
            class="w-full sm:w-auto px-8 py-4 dark:bg-transparent border dark:border-white/10 hover:border-[#1859EB] dark:hover:border-white/20 hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-none dark:text-white text-sm font-medium rounded-full transition-all duration-300 ease-out flex items-center justify-center gap-2 shadow-sm dark:shadow-none bg-white border-slate-200 text-slate-700 hover:-translate-y-0.5 active:translate-y-0"
          >
            <iconify-icon icon="solar:play-circle-linear" class="text-xl shrink-0" />
            <span>Contact Us</span>
          </button>
        </div>
      </div>

      <!-- Large rounded card (neeche wala section) -->
      <div
        class="hero-card relative w-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden bg-white/95 dark:bg-white/90 shadow-2xl"
      >
        <div class="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] min-h-[420px] md:min-h-[480px] items-center gap-0">
          <!-- Left: Robot image with dot pattern overlay -->
          <div class="relative flex items-center justify-center lg:justify-start py-6 lg:py-8 pl-6 lg:pl-10 pr-2 order-2 lg:order-1">
            <div class="relative w-full max-w-[300px] md:max-w-[340px] lg:max-w-[380px] aspect-[4/5] lg:aspect-[5/6]">
              <lottie-player
                :src="lottieUrl"
                background="transparent"
                speed="0.9"
                loop
                autoplay
                class="absolute inset-0 w-full h-full hero-lottie"
              />
              <!-- Dot pattern overlay -->
              <!-- <div class="hero-dots absolute inset-0 pointer-events-none" aria-hidden="true" /> -->
            </div>
          </div>

          <!-- Right: Text and CTA -->
          <div
            class="flex flex-col justify-center items-start px-6 sm:px-10 lg:px-12 xl:px-16 py-10 lg:py-14 order-1 lg:order-2"
          >
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-6xl font-bold tracking-tight leading-[1.15] mb-6">
              <span class="hero-heading-primary">AI-Powered Solutions for </span>
              <span class="hero-title-gradient">Every Challenge</span>
            </h1>

            <p
              class="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-xl"
            >
              At Infinitum Solution, we are committed to harnessing the transformative power of AI to
              revolutionize business processes, elevate human experiences, and establish new benchmarks of
              success. Our mission is to realize AI's potential alongside our clients, transforming
              innovative ideas into concrete, impactful outcomes.
            </p>

            <div>
              <button
                type="button"
                class="px-8 py-4 rounded-2xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-base transition-colors duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-card {
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.hero-heading-primary {
  background: linear-gradient(135deg, #1e3a8a 0%, #3730a3 35%, #4f46e5 70%, #6366f1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-title-gradient {
  background: linear-gradient(90deg, #22d3ee 0%, #06b6d4 25%, #8b5cf6 70%, #d946ef 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-lottie {
  margin: auto;
}

.hero-dots {
  background-image: radial-gradient(
    circle at 50% 50%,
    rgba(0, 0, 0, 0.12) 1.5px,
    transparent 1.5px
  );
  background-size: 16px 16px;
  mix-blend-mode: multiply;
}
</style>
