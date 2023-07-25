let dropdown = document.querySelector('#drop1');
let dropdown2 = document.querySelector('#drop2');
let dropdown3 = document.querySelector('#drop3');
let dropdown4 = document.querySelector('#drop4');

let open = document.getElementById('open')
let close = document.getElementById('close')
let items = document.getElementById('items')
let open2 = document.getElementById('open2')
let close2 = document.getElementById('close2')
let items2 = document.getElementById('items2')

let desktopOpen = document.getElementById('desktop-open')
let desktopOpen2 = document.getElementById('desktop-open2')
let desktopClose = document.getElementById('desktop-close')
let desktopClose2 = document.getElementById('desktop-close2')

let desktopSubmenu = document.getElementById('desktop-submenu')
let desktopSubmenu2 = document.getElementById('desktop-submenu2')

let menu = document.getElementById('menu')
let openham = document.getElementById('openham')
let closeham = document.getElementById('closeham')

dropdown3.addEventListener('click', () => {
    if (desktopClose.style.display == 'none') {
        desktopOpen.style.display = 'none'
        desktopClose.style.display ='block'
        desktopSubmenu.style.display = 'none'
    }
    else {
        desktopOpen.style.display = 'block'
        desktopClose.style.display = 'none'
        desktopSubmenu.style.display = 'grid'
    }
})

dropdown4.addEventListener('click', () => {
    if (desktopClose2.style.display == 'none') {
        desktopOpen2.style.display = 'none'
        desktopClose2.style.display ='block'
        desktopSubmenu2.style.display = 'none'
    }
    else {
        desktopOpen2.style.display = 'block'
        desktopClose2.style.display = 'none'
        desktopSubmenu2.style.display = 'block'
    }
})

dropdown.addEventListener('click', () => {
    if (close.style.display == 'none') {
        open.style.display = 'none'
        close.style.display ='block'
        items.style.display = 'none'
    }
    else {
        open.style.display = 'block'
        close.style.display = 'none'
        items.style.display = 'grid'
    }
    
})

dropdown2.addEventListener('click', () => {
    if (close2.style.display == 'none') {
        open2.style.display = 'none'
        close2.style.display ='block'
        items2.style.display = 'none'
    }
    else {
        open2.style.display = 'block'
        close2.style.display = 'none'
        items2.style.display = 'flex'
    }
    
})

openham.addEventListener('click', () => {
    menu.style.right = '-100%'
})

closeham.addEventListener('click', () => {
    menu.style.right = '0%'
})