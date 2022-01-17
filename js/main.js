//Selecting items from the document

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBranding= document.querySelector('.menu-branding');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

// const cursor = document.querySelector('.cursor');

// document.addEventListener('mousemove', e=>{
//     cursor.setAttribute('style','top: '+(e.pageY - 10)+'px; left: '+(e.pageX - 10)+'px')
// })

//Set Initial State of the Menu


let showMenu =false;

menuBtn.addEventListener('click',toogleMenu);

function toogleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item=>item.classList.add('show'))
        showMenu = true
    }
    else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item=>item.classList.remove('show'))
        showMenu = false

    }
}