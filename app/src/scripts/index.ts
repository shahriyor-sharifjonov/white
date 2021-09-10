// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}


const dropBtn = document.getElementsByClassName('header__lang-btn')
function addActiveDrop(el){
  el.classList.toggle('active');
}


// Header Menu
const headerButton: HTMLButtonElement =
  document.querySelector(".header__main-button");
const headerMenu: HTMLUListElement = document.querySelector(".header__left");
let menuOpened = false;
const menuToggle = () => {
  menuOpened = !menuOpened;
  checkMenu();
  checkMenu2()
  headerButton.classList.toggle("open");
  headerMenu.classList.toggle("open");
};

function checkMenu(){
  if(menuOpened){
    disableScroll()
  }else{
    enableScroll()
  }
}

function checkMenu2(){
  if(menuOpened2){
    menuToggle2()
  }
}

headerButton.onclick = menuToggle;

window.onclick = (e) => {
  if (menuOpened && !e.composedPath().includes(headerButton) && !e.composedPath().includes(headerMenu)){
    menuToggle();
  }
  if(e.target.classList.contains('header__lang-item')){
    for(let i = 0; i < dropBtn.length; i++){
      dropBtn[i].classList.remove('active')
    }
  }
};

const headerButton2: HTMLButtonElement =
  document.querySelector(".header__right-menu-button");
const headerMenu2: HTMLUListElement = document.querySelector(".header__right-menu");
let menuOpened2 = false;
const menuToggle2 = () => {
  menuOpened2 = !menuOpened2;
  headerButton2.classList.toggle("open");
  headerMenu2.classList.toggle("open");
};

headerButton2.onclick = menuToggle2;


if(document.querySelector('.carousel')){
  $('.carousel').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    touchMove: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      },
    ]
  });
}


let windowLess = false
function checkWindowSize(){
  if(window.innerWidth < 1400){
    windowLess = true
  }else{
    windowLess = false
  }
}
if(document.getElementsByClassName('custom-container')){
  var mustRemove = document.getElementsByClassName('custom-container');
}
function checkWindow(){
  checkWindowSize()
  if(windowLess){
    for(let i = 0; i < mustRemove.length; i++){
      mustRemove[i].classList.remove('container-sm')
      mustRemove[i].classList.add('container')
    }
  }else{
    for(let i = 0; i < mustRemove.length; i++){
      mustRemove[i].classList.add('container-sm')
      mustRemove[i].classList.remove('container')
    }
  }
}
window.onload = checkWindow
window.addEventListener('resize', function(){
  checkWindow()
})