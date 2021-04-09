
const menuButton = document.querySelector('#menu-icon');
const mobileNav = document.querySelector('#main-menu');


menuButton.addEventListener('click', function(){
    mobileNav.classList.toggle('show-menu');
    menuButton.classList.toggle('close');
    console.log('click!');
});


// sub menu animation and functionality

const expandBtn = document.querySelectorAll('.expand-btn');

expandBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('show-sub-menu');
        console.log('first level link');
    });
});


// side-menu animation and functionality

const sideMenuBtn = document.querySelector('#side-menu-button');
const sideMenuContainer = document.querySelector('#side-menu-container');

sideMenuBtn.addEventListener('click', () => {
    sideMenuContainer.classList.toggle('side-menu-open');
    console.log('side menu button clicked!');
});






// const targetLink = document.querySelectorAll(".has-sub-menu");
// const subMenu = document.querySelectorAll('.sub-menu');
// const subMenu2 = document.querySelectorAll('#main-menu ul > li > ul > .has-sub-menu > a');

// for (let j = 0; j < subMenu2.length; j++){
//     subMenu2[j].style.color = '#ffffff';
//     console.log("I'm submenu 2!");
// }



// for (let i = 0; i < targetLink.length; i++){
//     targetLink[i].addEventListener('click', function(){
//         subMenu[i].classList.toggle('show-sub-menu');
//         console.log('sub link clicked!');
//     });
// }


// var parent = document.getElementById('menu'); 
// var allElements = document.getElementsByTagName('a'); 
// if (parent.contains(allElements[i]) { 
//     alert('Link is inside meni'); 
// }

// for (var i= 0; i< allElements.length; i++) { 
//     if (parent.contains(allElements[i]) { true } 
// }