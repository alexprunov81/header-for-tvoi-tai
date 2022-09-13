const mobileMenu = document.querySelector('.mobile-menu')
const burger = document.querySelector('.burger')
burger.addEventListener('click', e => {
    mobileMenu.classList.toggle('mobile-menu_active')
    burger.classList.toggle('burger_active')
})

