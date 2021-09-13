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

// Header Menu
if(document.querySelector(".header__right-menu-button2")){
  const headerButton3: HTMLButtonElement = document.querySelector(".header__right-menu-button2");
  const headerMenu3: HTMLUListElement = document.querySelector(".header__right-menu-content");
  let menuOpened3 = false;
  const menuToggle3 = () => {
    menuOpened3 = !menuOpened3;
    checkMenu3();
    checkMenu2()
    headerButton3.classList.toggle("open");
    headerMenu3.classList.toggle("open");
  };
  
  function checkMenu3(){
    if(menuOpened3){
      disableScroll()
    }else{
      enableScroll()
    }
  }
  
  
  headerButton3.onclick = menuToggle3;
}


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

if(document.getElementsByClassName('sports__top-item')){
  let sportsItem = document.getElementsByClassName('sports__top-item');
  window.addEventListener('click', function(e){
    if(e.target.classList.contains('sports__top-item')){
      for(let i = 0; i < sportsItem.length; i++){
        sportsItem[i].classList.remove('active');
      }
      e.target.classList.add('active');
    }
  }) 
}

function headerDropOpen(el){
  el.classList.toggle('active');
}


function changeProfileData(el){
  let dataRows = document.getElementsByClassName('profile__data-row')
  let saveBtn = document.querySelector('.profile__data-save')
  let cancelBtn = document.querySelector('.profile__data-cancel')
  window.addEventListener('click', function(e){
    if(e.target == saveBtn){
      saveBtn.classList.remove('active');
      for(let i = 0; i < el.childNodes.length; i++){
        el.childNodes[0].disabled = true
        el.childNodes[1].innerHTML = "<img src='images/edit.svg'>"
      }
    }else if(e.target == cancelBtn){
      saveBtn.classList.remove('active');
      for(let i = 0; i < el.childNodes.length; i++){
        el.childNodes[0].disabled = true
        el.childNodes[1].innerHTML = "<img src='images/edit.svg'>"
      }
    }
    
  })
  function checkProfileInputs(){
    console.log('check');
    
    for(let i = 0; i < dataRows.length; i++){
      if(dataRows[i].classList.contains('active')){
        console.log('bor');
        
        saveBtn.classList.add('active')
      }
    }
  }
  el.classList.toggle('active')
  if(el.classList.contains('active')){
    for(let i = 0; i < el.childNodes.length; i++){
      el.childNodes[0].disabled = false
      el.childNodes[1].innerHTML = "<img src='images/correct.svg'>"
      checkProfileInputs()
    }
  }
  else{
    for(let i = 0; i < el.childNodes.length; i++){
      el.childNodes[0].disabled = true
      el.childNodes[1].innerHTML = "<img src='images/edit.svg'>"
      checkProfileInputs()
    }
  }
}


let verificationBtn = document.getElementsByClassName('verification__top-btn')

window.addEventListener('click' function(e){
  if(e.target.classList.contains('verification__top-btn')){
    for(let i = 0; i < verificationBtn.length; i++){
      verificationBtn[i].classList.remove('active')
    }
    e.target.classList.add('active')
  }
})


let popup = document.querySelector('.popup')
function popupOpen(){
  popup.classList.add('open')
}
window.addEventListener('click', function(e){
  if(e.target.classList.contains('popup__btn')){
    popup.classList.remove('open')
  }
  if(e.target.classList.contains('popup__close')){
    popup.classList.remove('open')
  }
})


function payoutDrop(el){
  el.classList.toggle('active')
}

function payoutDropClose(){
  document.querySelector('.payout__dropdown-btn').classList.remove('active')
}