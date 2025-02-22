const links = document.querySelectorAll('[href^="#"]');

links.forEach((link) => link.addEventListener('click', clickHandler))

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const targetElement = document.querySelector(href);
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 70;
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
    });
}


document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo');

    logo.style.cursor = 'pointer'; 

    logo.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});