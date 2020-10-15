const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const sideBar = document.querySelector('.sidebar');
//const body = document.querySelector('body');



let showMenu = false;
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        hamburger.classList.add('open');
        sideBar.classList.add('open');
        showMenu = true;

    } else {
        hamburger.classList.remove('open');
        sideBar.classList.remove('open');
        showMenu = false;
    }
}


AOS.init({
    offset: 100,
    duration: 1200,
    easing: 'ease-in-out',
});
