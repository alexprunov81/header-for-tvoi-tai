$(document).ready(function () {
    $('.burger').click(function () {
        $('.mobile-menu').toggleClass('mobile-menu_active')
        $('.burger').toggleClass('burger_active')
    })
    $('.location__visible').click(function () {
        $('.dropdown-cities').addClass('dropdown_active')
    })
    $('.dropdown-cities__close').click(function(){
        $('.dropdown-cities').removeClass('dropdown_active')
    })
})
