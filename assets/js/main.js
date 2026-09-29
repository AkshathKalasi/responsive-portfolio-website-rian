/*=============== SHOW / REMOVE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
navToggle?.addEventListener('click', () => navMenu.classList.add('show-menu'))
navClose?.addEventListener('click', () => navMenu.classList.remove('show-menu'))
document.querySelectorAll('.nav__link').forEach(l => l.addEventListener('click', () => navMenu.classList.remove('show-menu')))

/*=============== SHADOW HEADER + SCROLL UP ===============*/
window.addEventListener('scroll', () => {
  document.getElementById('header').classList.toggle('shadow-header', window.scrollY >= 50)
  document.getElementById('scroll-up').classList.toggle('show-scroll', window.scrollY >= 350)
})

/*=============== EMAIL JS ===============*/
// Create a free account at emailjs.com and fill in these three values
const SERVICE_ID = 'service_i4jb2jz', TEMPLATE_ID = 'template_v47qykm', PUBLIC_KEY = 'pQGJhmVDRqNLChZTs'
const form = document.getElementById('contact-form'), msg = document.getElementById('contact-message')
form.addEventListener('submit', e => {
  e.preventDefault()
  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY).then(() => {
    msg.textContent = 'Message sent successfully ✅'
    setTimeout(() => msg.textContent = '', 5000)
    form.reset()
  }, () => { msg.textContent = 'Message not sent (service error) ❌' })
})

/*=============== ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
window.addEventListener('scroll', () => {
  const y = window.scrollY
  sections.forEach(s => {
    const link = document.querySelector('.nav__list a[href*=' + s.id + ']')
    if (link) link.classList.toggle('active-link', y > s.offsetTop - 58 && y <= s.offsetTop - 58 + s.offsetHeight)
  })
})

/*=============== DARK / LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button'), darkTheme = 'dark-theme', iconTheme = 'ri-sun-line'
if (localStorage.getItem('selected-theme') === 'dark') { document.body.classList.add(darkTheme); themeButton.classList.add(iconTheme) }
themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  localStorage.setItem('selected-theme', document.body.classList.contains(darkTheme) ? 'dark' : 'light')
})

/*=============== SCROLL REVEAL ===============*/
if (typeof ScrollReveal !== 'undefined') {
  const sr = ScrollReveal({ origin: 'top', distance: '60px', duration: 2000, delay: 300 })
  sr.reveal('.home__perfil, .about__container, .contact__mail')
  sr.reveal('.home__name, .home__description', { origin: 'left', delay: 500 })
  sr.reveal('.services__card, .projects__card', { interval: 100 })
}
