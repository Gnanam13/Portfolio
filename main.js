/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu')
      navToggle = document.getElementById('nav-toggle')
      navclose = document.getElementById('nav-menu')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
     navToggle.addEventListener('click' , () =>{
          navMenu.classList.add('show-menu')
     })
}

/*===== MENU HIDDEN =====*/
/*  Validate if  constant exists  */
if(navclose){
     navclose.addEventListener('click', ()  =>{
          navMenu.classList.remove('show-menu')
     })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
     const navMenu = document.getElementById('nav-menu')
     //When we click on each nav__link, we remove the show-menu class
     navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () =>{
     const header = document.getElementById('header')
     this.scrollY >= 50 ? header.classList.add('shadow-header')
                         :header.classList.remove('shadow-header')
}
window.addEventListener('scroll',shadowHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
     e.preventDefault()

     // Service ID - templateID - #form - publicKey
     emailjs.sendForm('service_4q02zy9','template_xjr2dlq','#contact-form','di6HCj0eGHV_oacZ7')
     .then(()=>{
          // Show sent message
          contactMessage.textContent = 'Message sent successfully ✅'
          
          // Remove message after five seconds
          setTimeout(()=>{
               contactMessage.textContent = ''
          }, 5000)

          // Clear input fields
          contactForm.reset()

     }, () =>{
          // Show error message
          contactMessage.textContent = 'Message not sent (service error) ❌'
     })
}

contactForm.addEventListener('submit', sendEmail)
/*=============== SHOW SCROLL UP ===============*/ 

const scrollHeader = () =>{
     const scrollUp = document.getElementById('scroll-up')
     // when the scroll is higher than 350 viewport height , add the show-scroll class to the a tag with the scrollup class 
     this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                         : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollup)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
     const scrollDown = window.scrollY

     sections.forEach(current =>{
          const sectionHeight = current.offHeight,
               sectionTop = current.offsetTop - 58,
               sectionId = current.getAttribute('id'),
               sectionsClass = document.querySelector(' .nav__menu a[href*=' + sectionId + ']')

     })
}

window.addEventListener('scroll', scrollActive)
/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

//previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

//we validate if the user previously chose a topic 
if (selectedTheme) {
     //if the validation is fulfilled , we ask that the issue was to know if we activated or deactivated the dark 
     document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
     themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

//Active / deactive the theme manually with the button 
themeButton.addEventListener('click', () =>{
     //Add or remove the dark / icon theme 
     document.body.classList.toggle(darkTheme)
     themeButton.classList.toggle(iconTheme)
     //we save the theme and the current icon that the user chose 
     localStorage.setItem('selected-theme', getCurrentTheme())
     localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
     origin: 'top',
     distance: '60px',
     duration: 2500,
     delay: 400,
     //reset: true // Animations repeat 
})

sr.reveal(`.home__perfil`, {origin: 'right'})
sr.reveal(`.home__name, .home__info`,  {origin: 'left'})