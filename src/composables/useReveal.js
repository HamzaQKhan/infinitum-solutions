import { onMounted, nextTick } from 'vue'

export function useReveal() {
  onMounted(() => {
    nextTick(() => {
      setupObserver()
    })
  })
}

function setupObserver() {
  const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
      } else {
        entry.target.classList.remove('active')
      }
    })
  }, observerOptions)

  const revealElements = document.querySelectorAll('.reveal')
  revealElements.forEach((el) => observer.observe(el))
}
