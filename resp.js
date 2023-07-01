burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightNav = document.querySelector('.rightNav')

burger.addEventListener('click', () => {
    rightNav.classList.toogle('v-class-resp');
    navList.classList.toogle('v-class-resp');
    navbar.classList.toogle('h-nav-resp');
}
)