function mobileMenu(){
    var menu = document.querySelector('.mobile-menu');
    var hamburger = document.querySelector('.hamburger-ico');
    var close = document.querySelector('.close');
    var overlay = document.querySelector('.overlay');
    menu.style.display = 'block';
    hamburger.style.display = 'none'
    close.style.display = 'block';
    overlay.style.display = 'block'
}
function menuClose(){
    var menu = document.querySelector('.mobile-menu');
    var hamburger = document.querySelector('.hamburger-ico');
    var close = document.querySelector('.close');
    var overlay = document.querySelector('.overlay');
    menu.style.display = 'none';
    hamburger.style.display = 'block'
    close.style.display = 'none';
    overlay.style.display = 'none';
}