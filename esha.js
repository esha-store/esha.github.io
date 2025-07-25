(() => {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    if (navToggle) {navToggle.addEventListener('click', () => {navMenu.classList.add('show-menu');});}
    if (navClose) {navClose.addEventListener('click', () => {navMenu.classList.remove('show-menu');});}
    const navLinks = document.querySelectorAll('.nav__link');
    const linkAction = () => {if (navMenu) {navMenu.classList.remove('show-menu');}}
    navLinks.forEach(link => link.addEventListener('click', linkAction));
    const header = document.getElementById('header');
    const scrollHeader = () => {if (header) {this.scrollY >= 50? header.classList.add('scroll-header'): header.classList.remove('scroll-header');}}
    window.addEventListener('scroll', scrollHeader);
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        const addPressedClass = () => button.classList.add('button--pressed');
        const removePressedClass = () => button.classList.remove('button--pressed');
        button.addEventListener('mousedown', addPressedClass);
        button.addEventListener('mouseup', removePressedClass);
        button.addEventListener('mouseleave', removePressedClass);
    });
})();