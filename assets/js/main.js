function toggleTheme() {
    var theme = document.getElementsByTagName('link')[0];
    if (theme.getAttribute('href') == 'assets/css/styles.css') {
        theme.setAttribute('href', 'assets/css/styles_night.css');
        $('#logo').removeClass('fas fa-cloud-moon');
        $('#logo').addClass('bx bxs-sun');
    } else {
        theme.setAttribute('href', 'assets/css/styles.css');
        $('#logo').removeClass('bx bxs-sun');
        $('#logo').addClass('fas fa-cloud-moon');
    }
}

var homeimg=document.getElementById("profile__border");
var profile=document.getElementsByClassName("profile__perfil")[0];
homeimg.addEventListener("mouseover", colorRed);
homeimg.addEventListener("mouseout", colorBlue);
function colorRed() {
    profile.style.background="linear-gradient(180deg,orangered 0%,rgba(255, 68, 0, 0.2) 100%)";
    document.getElementsByClassName("home__title-color")[0].style.color="orangered";
    document.getElementById("profile__border").style.border="3.5px solid orangered";
}
function colorBlue() 
{
    profile.style.background="linear-gradient(180deg, hsla(var(--hue), var(--sat), var(--lig), 1) 0%, hsla(var(--hue), var(--sat), var(--lig), .2) 100%";
    document.getElementsByClassName("home__title-color")[0].style.color="hsl(var(--hue), var(--sat), var(--lig))";
    document.getElementById("profile__border").style.border="3.5px solid hsl(var(--hue), var(--sat), var(--lig))";
}



/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive);