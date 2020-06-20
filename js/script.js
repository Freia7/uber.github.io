
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.gamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('gamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('gamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})