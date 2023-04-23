const menu = document.querySelector('.header__nav-block')
const menuBtn = document.querySelector('.header__block-btn2')
const body = document.querySelector('body')

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
    menuBtn.classList.toggle('active')
    body.classList.toggle('active')
})

let mask = document.querySelector('.mask');

window.addEventListener('load', () =>{
    mask.classList.add('hide'),
    setTimeout(() => {
        mask.remove()
    }, 2000);
})