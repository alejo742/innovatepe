const dropdownContent = document.querySelector('.dropdown-content');
const navBurger = document.querySelector('.burger.burger1');

navBurger.addEventListener('click', ()=> {
    dropdownContent.classList.toggle('visible')
})