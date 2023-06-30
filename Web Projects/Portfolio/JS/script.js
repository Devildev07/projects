/*========== SHOW MENU ==========*/
const showMenu = (toggleId,navOpenId,navCloseId) =>{
    const toggle = document.getElementById(toggleId), navOpen = document.getElementById(navOpenId), navClose = document.getElementById(navCloseId)

   if(toggle){
    toggle.addEventListener('click', ()=>{
        navOpen.classList.add('show-menu')
    })
   } 
   if(navClose){
    navClose.addEventListener('click',()=>{
        navOpen.classList.remove('show-menu')
    })
   }
}
showMenu('nav-toggle','nav-menu','nav-close')

/*========== Remove Mobile MENU ==========*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*========== Accordion ==========*/
const skillContent = document.getElementsByClassName('skill__content'),
skillHeader = document.querySelectorAll('.skill__header')

function toggleSkills(){
    let itemClass = this.parentNode.className
    for(i = 0; i < skillContent.length; i++){
        skillContent[i].className = 'skill__content skill__close'
    }
    if(itemClass === 'skill__content skill__close'){
        this.parentNode.className = 'skill__content skill__open'
    }
}

skillHeader.forEach((e) =>{
    e.addEventListener('click', toggleSkills)
})

/*========== Qualification Tab ==========*/
const tabs = document.querySelectorAll('.tab__toggle'),
tabContent = document.querySelectorAll('.qualification__content')

// console.log(tabs, tabContent)

tabs.forEach((tab, index) => {
    tab.addEventListener('click', ()=>{
        tabContent.forEach((content) => {
            content.classList.remove('qualification__active')
        })
        tabs.forEach((tab) =>{
            tab.classList.remove('qualification__active')
        })

        tabContent[index].classList.add('qualification__active')
        tabs[index].classList.add('qualification__active')
    })
})

/*========== Service Model ==========*/
const modelView = document.querySelectorAll('.services__model'),
modelBtn = document.querySelectorAll('.services__button'),
modelClose = document.querySelectorAll('.services__model_close')

let model = function (modelClick){
    modelView[modelClick].classList.add('active-model')
}

modelBtn.forEach((modelBtn, i)=>{
    modelBtn.addEventListener('click', ()=>{
        model(i)
    })
})

modelClose.forEach((modelClose)=>{
    modelClose.addEventListener('click', ()=>{
        modelView.forEach((modelView) =>{
            modelView.classList.remove('active-model')
        })
    })
})

/*========== Portfolio Swiper ==========*/
let swiperPortfolio = new Swiper(".portfolio__container", {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
    },
  });

//   Card Swiper
// let swiper = new Swiper(".portfolio__container", {
//     effect: "cards",
//     grabCursor: true,
//   });

/*========== Testimonial ==========*/
let swiperTestimonial = new Swiper(".testimonial__container", {
    loop:true,
    grabCursor:true,
    slidesPerView: 1,
    spaceBetween: 48,
    centeredSlides: true,
    
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
    },
  });

/*========== Scroll Active Link ==========*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
  const scrollY = window.scrollY

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    const sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav__menu a[href*=' +sectionId + ']').classList.add('active-link')
    }else{
      document.querySelector('.nav__menu a[href*=' +sectionId + ']').classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive)

/*========== Change Banground Header ==========*/
function scrollHeader(){
  const nav = document.getElementById('header')
  if(window.scrollY >= 80) nav.classList.add('scroll-header');
  else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

// scroll to top
function scrollTop(){
  const scrollTop = document.getElementById('scroll-top')
  if(window.scrollY >= 60){
      scrollTop.classList.add('show-scroll');
  }else {
     scrollTop.classList.remove('show-scroll'); 
  }
}
window.addEventListener('scroll',scrollTop)

// dark theme
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click' , ()=>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
})