// Nav bar behavior
let headers = document.querySelectorAll('header');

window.addEventListener('scroll', () => {
    for (const header of headers) {
        if (window.scrollY > 0) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    };
});

// Hamburger mobile menu
let hambuger = document.querySelector('#hamburger');
let menu = document.querySelector('#mobile-menu');
let menuOpen = false;

hamburger.onclick = () => {
    if (menuOpen) {
        menu.style.display = "none";
        menuOpen = false;
    } else {
        menu.style.display = "flex";
        menuOpen = true;
    }
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 768  && menuOpen) {
        menu.style.display = "none";
        menuOpen = false;
    }
});


// History page transitions
let events = document.querySelectorAll('.event');
let bottom = window.innerHeight * 0.65;

function fly() {
    for (const event of events) {
        let top = event.getBoundingClientRect().top;

        if (top < bottom) {
            event.classList.add('visible');
        }
    };
}

window.addEventListener('load', fly);
window.addEventListener('scroll', fly);

// Back to top button
let backToTop = document.querySelector('footer .top');

backToTop.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth'});
}

// Intro text fade in
let intro = document.querySelector('.intro');

window.addEventListener('load', () => {
    intro.classList.add('visible');
});

// Down arrow
let down = document.querySelector('.intro .arrow');
let next = document.querySelector('main section:nth-child(2)');

down.onclick = () => {
    next.scrollIntoView({ behavior: 'smooth' });
}