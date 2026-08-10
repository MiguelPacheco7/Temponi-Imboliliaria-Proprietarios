import '../css/styles.css'

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal()
  initSmoothScroll()
  initFormHandling()
  initMobileNav()
  initHeaderScroll()
})

function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal')

  if (!('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('is-visible'))
    return
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px',
  })

  reveals.forEach(el => observer.observe(el))
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href')
      if (!targetId || targetId === '#') return

      const target = document.querySelector(targetId)
      if (!target) return

      e.preventDefault()
      const header = document.querySelector('header')
      const offset = header ? header.offsetHeight + 16 : 0
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset

      window.scrollTo({ top, behavior: 'smooth' })
    })
  })
}

function initFormHandling() {
  const forms = document.querySelectorAll('form[data-form]')
  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      const btn = form.querySelector('button[type="submit"]')
      if (!btn) return

      const originalText = btn.innerHTML
      btn.innerHTML = '<span class="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span> Enviando...'
      btn.disabled = true

      setTimeout(() => {
        btn.innerHTML = '<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Enviado com sucesso!'
        btn.classList.remove('bg-gold-500', 'hover:bg-gold-600')
        btn.classList.add('bg-emerald-500')
        form.reset()

        setTimeout(() => {
          btn.innerHTML = originalText
          btn.disabled = false
          btn.classList.add('bg-gold-500', 'hover:bg-gold-600')
          btn.classList.remove('bg-emerald-500')
        }, 3500)
      }, 1600)
    })
  })
}

function initMobileNav() {
  const btn = document.querySelector('[data-nav-toggle]')
  const menu = document.querySelector('[data-nav-menu]')
  if (!btn || !menu) return

  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true'
    btn.setAttribute('aria-expanded', String(!expanded))
    menu.classList.toggle('hidden')
    menu.classList.toggle('flex')
  })

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      btn.setAttribute('aria-expanded', 'false')
      menu.classList.add('hidden')
      menu.classList.remove('flex')
    })
  })
}

function initHeaderScroll() {
  const header = document.querySelector('header')
  if (!header) return

  const onScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('shadow-lg', 'bg-white/95', 'backdrop-blur-md')
      header.classList.remove('bg-transparent')
    } else {
      header.classList.remove('shadow-lg', 'bg-white/95', 'backdrop-blur-md')
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
}
