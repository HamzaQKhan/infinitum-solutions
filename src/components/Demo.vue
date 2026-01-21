<script setup>
</script>

<template>
  <section
    id="demo"
    class="py-24 dark:bg-[#050507] border-y dark:border-white/5 relative overflow-hidden transition-colors bg-white border-slate-200"
  >
    <div class="absolute inset-0 dark:hidden bg-slate-50/50" />
    <div
      class="absolute inset-0 hidden dark:block bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] via-[#050507] to-[#050507] from-indigo-900/20"
    />
    <!-- Ambient orbs behind cards -->
    <div
      class="absolute right-0 top-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-blue-500/10 dark:bg-blue-500/15 blur-[100px] pointer-events-none -translate-x-1/4"
    />
    <div
      class="absolute right-1/4 bottom-1/4 w-[320px] h-[320px] rounded-full bg-[#7969EB]/10 dark:bg-[#7969EB]/20 blur-[80px] pointer-events-none"
    />

    <div class="max-w-6xl mx-auto px-6 relative z-10">
      <div class="mb-12 md:mb-16 reveal">
        <span
          class="inline-flex items-center gap-1.5 w-fit mb-5 px-3.5 py-1.5 rounded-full bg-[#7969EB]/10 dark:bg-[#7969EB]/20 border border-[#7969EB]/20 text-[#7969EB] dark:text-[#a5b4fc] text-xs font-semibold tracking-wide uppercase"
        >
          <iconify-icon icon="solar:atom-linear" class="text-sm" />
          Our Vision
        </span>
        <h2
          class="text-3xl md:text-4xl lg:text-5xl font-bold dark:text-white tracking-tight text-slate-900 leading-[1.15] max-w-3xl"
        >
          Unlocking the Full Potential of Artificial Intelligence
        </h2>
      </div>

      <div class="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <!-- Left: Body copy -->
        <div class="flex-1 space-y-8 reveal">
          <p class="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            At Infinitum Solution, we believe that realizing AI's true capabilities requires a
            harmonious blend of creativity, deep understanding, and a comprehensive grasp of both the
            technical and human dimensions of AI. Our innovative approach fuses advanced mathematical
            techniques with psychological insights, distinguishing us as leaders in revolutionizing
            global business operations through AI.
          </p>

          <div class="pl-6 border-l-4 border-l-[#7969EB] pt-2">
            <h3 class="text-xl md:text-2xl font-bold dark:text-white text-slate-900 mb-4">
              Bespoke AI Services
            </h3>
            <p class="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              Infinitum Solution offers tailored AI services designed to meet the specific
              requirements of each business. Our AI solutions are not only at the cutting edge of
              technology but are also crafted with a human-centric perspective. This ensures that our
              AI implementations boost operational efficiency, enhance collaboration between humans
              and machines, and deliver impactful results.
            </p>
          </div>
        </div>

        <!-- Right: Premium cards -->
        <div class="flex-1 flex flex-col gap-6 min-w-0">
          <!-- 220+ — gradient border, hero number, glow -->
          <div
            class="demo-card-220 group relative rounded-2xl p-[2px] bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-600 dark:from-blue-500 dark:via-cyan-400 dark:to-indigo-600 shadow-lg shadow-blue-500/15 dark:shadow-blue-500/10 hover:shadow-xl hover:shadow-blue-500/20 dark:hover:shadow-blue-500/15 transition-all duration-500 hover:-translate-y-0.5 reveal delay-100"
          >
            <div
              class="relative rounded-[14px] overflow-hidden bg-white dark:bg-[#0a0a0d] p-6 md:p-8"
            >
              <!-- Glow behind number only (top-left), stays clear of text -->
              <div
                class="demo-glow-pulse absolute -left-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-blue-400/25 to-cyan-400/15 blur-2xl group-hover:from-blue-400/35 group-hover:to-cyan-400/25 transition-all duration-500 pointer-events-none"
              />
              <div class="relative flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
                <div>
                  <p
                    class="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-2"
                  >
                    Projects & partnerships
                  </p>
                  <p
                    class="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 dark:from-blue-400 dark:via-cyan-300 dark:to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-transform duration-300 group-hover:scale-[1.02] origin-left"
                  >
                    220+
                  </p>
                </div>
                <p
                  class="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed max-w-sm"
                >
                  We are focused on specific goals of our client with multiple outcomes towards
                  profits.
                </p>
              </div>
            </div>
          </div>

          <!-- AI-Driven — glass, grid, pills (same width as 220+ card) -->
          <div
            class="demo-card-ai group relative w-full rounded-2xl overflow-hidden border border-white/60 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-xl shadow-slate-200/50 dark:shadow-[#7969EB]/5 hover:shadow-2xl hover:shadow-[#7969EB]/10 hover:-translate-y-0.5 transition-all duration-500 reveal delay-300"
          >
            <!-- Subtle grid -->
            <div
              class="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] pointer-events-none"
              style="background-image: linear-gradient(rgba(121,105,235,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(121,105,235,0.5) 1px, transparent 1px); background-size: 20px 20px"
            />
            <div class="relative p-6 md:p-8">
              <div class="flex flex-col sm:flex-row sm:items-center gap-5">
                <div
                  class="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#7969EB] to-indigo-500 shadow-lg shadow-[#7969EB]/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                >
                  <iconify-icon icon="solar:stars-linear" class="text-white text-2xl" />
                </div>
                <div class="min-w-0 flex-1">
                  <p
                    class="text-lg md:text-xl font-bold dark:text-white text-slate-900 tracking-tight"
                  >
                    AI-Driven Customer Service
                  </p>
                  <div class="mt-4 flex flex-wrap gap-2">
                    <span
                      class="demo-pill inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#7969EB]/10 dark:bg-[#7969EB]/20 border border-[#7969EB]/20 text-[#7969EB] dark:text-[#a5b4fc] text-xs font-semibold"
                    >
                      <iconify-icon icon="solar:clock-circle-linear" class="text-sm" />
                      24/7 support
                    </span>
                    <span
                      class="demo-pill inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#7969EB]/10 dark:bg-[#7969EB]/20 border border-[#7969EB]/20 text-[#7969EB] dark:text-[#a5b4fc] text-xs font-semibold"
                    >
                      <iconify-icon icon="solar:bolt-linear" class="text-sm" />
                      Smarter
                    </span>
                    <span
                      class="demo-pill inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#7969EB]/10 dark:bg-[#7969EB]/20 border border-[#7969EB]/20 text-[#7969EB] dark:text-[#a5b4fc] text-xs font-semibold"
                    >
                      <iconify-icon icon="solar:chart-2-linear" class="text-sm" />
                      Scales
                    </span>
                  </div>
                </div>
              </div>
              <!-- Corner accent (pushed to corner, no overlap) -->
              <div
                class="absolute -bottom-12 -right-12 h-28 w-28 rounded-full bg-gradient-to-tl from-[#7969EB]/15 to-transparent blur-2xl pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.demo-card-220 {
  background-size: 200% 200%;
  background-position: 0% 50%;
}
.demo-card-220:hover {
  animation: demo-border-flow 4s ease-in-out infinite;
}
@keyframes demo-border-flow {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes demo-glow-pulse {
  0%, 100% { opacity: 0.85; }
  50% { opacity: 1; }
}
.demo-glow-pulse {
  animation: demo-glow-pulse 3s ease-in-out infinite;
}

.demo-pill {
  transition: transform 0.3s ease;
}
.demo-card-ai:hover .demo-pill {
  transform: scale(1.02);
}
</style>
