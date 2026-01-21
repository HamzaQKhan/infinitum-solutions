<script setup>
import { provide } from 'vue'
import { useReveal } from './composables/useReveal'
import { useActiveSection } from './composables/useActiveSection'
import AuraBg from './components/AuraBg.vue'
import AppNav from './components/AppNav.vue'
import Hero from './components/Hero.vue'
import TrustSignals from './components/TrustSignals.vue'
import Features from './components/Features.vue'
import Demo from './components/Demo.vue'
import Testimonials from './components/Testimonials.vue'
import CTA from './components/CTA.vue'
import AppFooter from './components/AppFooter.vue'

useReveal()
const { activeId } = useActiveSection()
provide('activeSection', activeId)
</script>

<template>
  <div>
    <AuraBg />
    <AppNav />
    <Hero />
    <TrustSignals />
    <Features />
    <Demo />
    <Testimonials />
    <CTA />
    <AppFooter />
  </div>
</template>
