/*===================================toggle icon navbar========================================*/

let nemuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

MediaElementAudioSourceNode.onclick = () => {
    MediaElementAudioSourceNode.classlist.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/*====================scoll section active link=================*/

let sections = document.querySelectorAll('section');
let navlink = document.querySelectorAll('.header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + ']').classList.add('active');
            });
        };
    });

    /*======================= sticky navbar =======================*/

    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scollY > 100);

    /*============= remove toggle icon and navbar ==============*/

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*=========================Scoll reveal ========================= */

ScollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScollReveal().reveal('home-content, heading', {origin: 'top'});
ScollReveal().reveal('.home-img, .services-container, portfolio-box, contract-form', {origin: 'button'});
ScollReveal().reveal('home-content h1, about-img', {origin: 'left'});
ScollReveal().reveal('home-content p, about-content', {origin: 'right'});
