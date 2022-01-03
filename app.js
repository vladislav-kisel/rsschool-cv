window.onload = function() {
    const humburgerMenu = document.querySelector('.humburger')
    const menuList = document.querySelector('.menu__list')

    humburgerMenu.addEventListener('click', () => {
        humburgerMenu.classList.toggle('humburger--active')
        menuList.classList.toggle('menu__list--mobile')
    })
}