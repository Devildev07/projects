/*========== SHOW MENU ==========*/
const showMenu =(toggleId, navId ) => {
    const toggle = document.getElementById(toggleId), nav = document.getElementById(navId)

//   if (toggle && nav) {
    toggle.addEventListener('click', ()=>{
        nav.classList.toggle('show-menu')
    })
//   }  
}

showMenu('nav-toggle','nav-menu')

/*========== REMOVE MENU MOBILE ==========*/
const navLink = document.querySelectorAll('.nav__link')
function linkAction(){
    const navManu = document.getElementById('nav-menu')
    navManu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*========== SCROLL SECTION ACTIVE LINK ==========*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')
         
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')

        }
    })

}

window.addEventListener('scroll', scrollActive)

/*========== SHOW SCROLL TOP ==========*/
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    if(this.scrollY >= 200){
        scrollTop.classList.add('show-scroll');
    }else {
       scrollTop.classList.remove('show-scroll'); 
    }
}
window.addEventListener('scroll',scrollTop)

/*========== DARK LIGHT THEME ==========*/
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

/*========== REDUCE THE SIZE AND PRINT ON A4 SHEET ==========*/
function scaleCv(){
    document.body.classList.add('scale-cv')
}
/*========== REMOVE THE SIZE WHEN THE CV IS DOWNLOAD ==========*/
function removeScale(){
    document.body.classList.remove('scale-cv')
}
/*========== GENERATE PDF ==========*/
let areaCv = document.getElementById('area-cv')
let resumeButton = document.getElementById('resume-btn')
let opt = {
    margin: 0,
    filename: 'Dewanshu-Resume.pdf',
    image: {type: 'jpeg', quality:0.98},
    html2canvas: {scale:4},
    jsPDF: {format:'a4', orientation:'portrait'}
}

function generateResume(){
    html2pdf(areaCv, opt)
}

resumeButton.addEventListener('click', ()=>{
    scaleCv()
    generateResume()
    setTimeout(removeScale, 5000)
})