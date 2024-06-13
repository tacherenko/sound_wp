export function initializeBurgerMenu() {
    const burgerIcon = document.querySelector('.burger-icon');
    const mobileMenu = document.querySelector('.mobile-menu');
    const header = document.querySelector('.header');

    burgerIcon.addEventListener('click', function() {
        burgerIcon.classList.toggle('open');
        mobileMenu.classList.toggle('open');
        header.classList.toggle('hidden');
    });

    document.querySelectorAll('.mobile-menu ul li a').forEach(anchor => {
        anchor.addEventListener('click', function() {
            burgerIcon.classList.remove('open');
            mobileMenu.classList.remove('open');
            header.classList.remove('hidden');
        });
    });
}