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

let b = document.getElementById('dark');
let dark = false;
const body = document.querySelector('body');


let darkMode = () => {
    if (!dark) {
        body.style.backgroundColor = 'black';
        b.innerHTML = 'Day Mode';
        dark = true;
    } else {
        body.style.backgroundColor = 'white';
        b.innerHTML = 'Dark Mode';
        dark = false;
    }
}

b.addEventListener('click', darkMode);

AOS.init({
    offset: 100,
    duration: 1200,
    easing: 'ease-in-out',
});
