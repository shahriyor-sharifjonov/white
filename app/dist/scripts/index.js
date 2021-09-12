"use strict";var keys={37:1,38:1,39:1,40:1};function preventDefault(a){a.preventDefault()}function preventDefaultForScrollKeys(a){if(keys[a.keyCode])return preventDefault(a),!1}var supportsPassive=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function get(){supportsPassive=!0}}))}catch(a){}var wheelOpt=!!supportsPassive&&{passive:!1},wheelEvent="onwheel"in document.createElement("div")?"wheel":"mousewheel";function disableScroll(){window.addEventListener("DOMMouseScroll",preventDefault,!1),window.addEventListener(wheelEvent,preventDefault,wheelOpt),window.addEventListener("touchmove",preventDefault,wheelOpt),window.addEventListener("keydown",preventDefaultForScrollKeys,!1)}function enableScroll(){window.removeEventListener("DOMMouseScroll",preventDefault,!1),window.removeEventListener(wheelEvent,preventDefault,wheelOpt),window.removeEventListener("touchmove",preventDefault,wheelOpt),window.removeEventListener("keydown",preventDefaultForScrollKeys,!1)}var dropBtn=document.getElementsByClassName("header__lang-btn");function addActiveDrop(a){a.classList.toggle("active")}var headerButton=document.querySelector(".header__main-button"),headerMenu=document.querySelector(".header__left"),menuOpened=!1,menuToggle=function(){menuOpened=!menuOpened,checkMenu(),checkMenu2(),headerButton.classList.toggle("open"),headerMenu.classList.toggle("open")};function checkMenu(){menuOpened?disableScroll():enableScroll()}function checkMenu2(){menuOpened2&&menuToggle2()}if(headerButton.onclick=menuToggle,document.querySelector(".header__right-menu-button2")){var checkMenu3=function(){menuOpened3?disableScroll():enableScroll()},headerButton3=document.querySelector(".header__right-menu-button2"),headerMenu3=document.querySelector(".header__right-menu-content"),menuOpened3=!1,menuToggle3=function(){menuOpened3=!menuOpened3,checkMenu3(),checkMenu2(),headerButton3.classList.toggle("open"),headerMenu3.classList.toggle("open")};headerButton3.onclick=menuToggle3}window.onclick=function(a){if(!menuOpened||a.composedPath().includes(headerButton)||a.composedPath().includes(headerMenu)||menuToggle(),a.target.classList.contains("header__lang-item"))for(var b=0;b<dropBtn.length;b++)dropBtn[b].classList.remove("active")};var headerButton2=document.querySelector(".header__right-menu-button"),headerMenu2=document.querySelector(".header__right-menu"),menuOpened2=!1,menuToggle2=function(){menuOpened2=!menuOpened2,headerButton2.classList.toggle("open"),headerMenu2.classList.toggle("open")};headerButton2.onclick=menuToggle2,document.querySelector(".carousel")&&$(".carousel").slick({infinite:!1,slidesToShow:2,slidesToScroll:1,touchMove:!1,responsive:[{breakpoint:1400,settings:{slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!1}}]});var windowLess=!1;function checkWindowSize(){windowLess=!!(1400>window.innerWidth)}if(document.getElementsByClassName("custom-container"))var mustRemove=document.getElementsByClassName("custom-container");function checkWindow(){if(checkWindowSize(),windowLess)for(var a=0;a<mustRemove.length;a++)mustRemove[a].classList.remove("container-sm"),mustRemove[a].classList.add("container");else for(var b=0;b<mustRemove.length;b++)mustRemove[b].classList.add("container-sm"),mustRemove[b].classList.remove("container")}if(window.onload=checkWindow,window.addEventListener("resize",function(){checkWindow()}),document.getElementsByClassName("sports__top-item")){var sportsItem=document.getElementsByClassName("sports__top-item");window.addEventListener("click",function(a){if(a.target.classList.contains("sports__top-item")){for(var b=0;b<sportsItem.length;b++)sportsItem[b].classList.remove("active");a.target.classList.add("active")}})}function headerDropOpen(a){a.classList.toggle("active")}function changeProfileData(a){function b(){console.log("check");for(var a=0;a<c.length;a++)c[a].classList.contains("active")&&(console.log("bor"),d.classList.add("active"))}var c=document.getElementsByClassName("profile__data-row"),d=document.querySelector(".profile__data-save"),f=document.querySelector(".profile__data-cancel");if(window.addEventListener("click",function(b){if(b.target==d){d.classList.remove("active");for(var c=0;c<a.childNodes.length;c++)a.childNodes[0].disabled=!0,a.childNodes[1].innerHTML="<img src='images/edit.svg'>"}else if(b.target==f){d.classList.remove("active");for(var e=0;e<a.childNodes.length;e++)a.childNodes[0].disabled=!0,a.childNodes[1].innerHTML="<img src='images/edit.svg'>"}}),a.classList.toggle("active"),a.classList.contains("active"))for(var g=0;g<a.childNodes.length;g++)a.childNodes[0].disabled=!1,a.childNodes[1].innerHTML="<img src='images/correct.svg'>",b();else for(var e=0;e<a.childNodes.length;e++)a.childNodes[0].disabled=!0,a.childNodes[1].innerHTML="<img src='images/edit.svg'>",b()}var verificationBtn=document.getElementsByClassName("verification__top-btn");window.addEventListener("click",function(a){if(a.target.classList.contains("verification__top-btn")){for(var b=0;b<verificationBtn.length;b++)verificationBtn[b].classList.remove("active");a.target.classList.add("active")}});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbImtleXMiLCJwcmV2ZW50RGVmYXVsdCIsImUiLCJwcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXMiLCJrZXlDb2RlIiwic3VwcG9ydHNQYXNzaXZlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0Iiwid2hlZWxPcHQiLCJwYXNzaXZlIiwid2hlZWxFdmVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImRpc2FibGVTY3JvbGwiLCJlbmFibGVTY3JvbGwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZHJvcEJ0biIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJhZGRBY3RpdmVEcm9wIiwiZWwiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJoZWFkZXJCdXR0b24iLCJxdWVyeVNlbGVjdG9yIiwiaGVhZGVyTWVudSIsIm1lbnVPcGVuZWQiLCJtZW51VG9nZ2xlIiwiY2hlY2tNZW51IiwiY2hlY2tNZW51MiIsIm1lbnVPcGVuZWQyIiwibWVudVRvZ2dsZTIiLCJvbmNsaWNrIiwiY2hlY2tNZW51MyIsIm1lbnVPcGVuZWQzIiwiaGVhZGVyQnV0dG9uMyIsImhlYWRlck1lbnUzIiwibWVudVRvZ2dsZTMiLCJjb21wb3NlZFBhdGgiLCJpbmNsdWRlcyIsInRhcmdldCIsImNvbnRhaW5zIiwiaSIsImxlbmd0aCIsInJlbW92ZSIsImhlYWRlckJ1dHRvbjIiLCJoZWFkZXJNZW51MiIsIiQiLCJzbGljayIsImluZmluaXRlIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJ0b3VjaE1vdmUiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiZG90cyIsImFycm93cyIsIndpbmRvd0xlc3MiLCJjaGVja1dpbmRvd1NpemUiLCJpbm5lcldpZHRoIiwibXVzdFJlbW92ZSIsImNoZWNrV2luZG93IiwiYWRkIiwib25sb2FkIiwic3BvcnRzSXRlbSIsImhlYWRlckRyb3BPcGVuIiwiY2hhbmdlUHJvZmlsZURhdGEiLCJjaGVja1Byb2ZpbGVJbnB1dHMiLCJjb25zb2xlIiwibG9nIiwiZGF0YVJvd3MiLCJzYXZlQnRuIiwiY2FuY2VsQnRuIiwiY2hpbGROb2RlcyIsImRpc2FibGVkIiwiaW5uZXJIVE1MIiwidmVyaWZpY2F0aW9uQnRuIl0sIm1hcHBpbmdzIjoiYUFFQSxHQUFJQSxDQUFBQSxJQUFJLENBQUcsQ0FBQyxHQUFJLENBQUwsQ0FBUSxHQUFJLENBQVosQ0FBZSxHQUFJLENBQW5CLENBQXNCLEdBQUksQ0FBMUIsQ0FBWCxDQUVBLFFBQVNDLENBQUFBLGNBQVQsQ0FBd0JDLENBQXhCLENBQXlCLENBQ3ZCQSxDQUFDLENBQUNELGNBQUYsRUFDRCxDQUVELFFBQVNFLENBQUFBLDJCQUFULENBQXFDRCxDQUFyQyxDQUFzQyxDQUNwQyxHQUFJRixJQUFJLENBQUNFLENBQUMsQ0FBQ0UsT0FBSCxDQUFSLENBRUUsTUFEQUgsQ0FBQUEsY0FBYyxDQUFDQyxDQUFELENBQ2QsR0FFSCxDQUdELEdBQUlHLENBQUFBLGVBQWUsR0FBbkIsQ0FDQSxHQUFJLENBQ0ZDLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsTUFBeEIsQ0FBZ0MsSUFBaEMsQ0FBc0NDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQixFQUF0QixDQUEwQixTQUExQixDQUFxQyxDQUN6RUMsR0FBRyxDQUFFLGNBQUEsQ0FBY0wsZUFBZSxHQUFVLENBRDZCLENBQXJDLENBQXRDLENBR0QsQ0FBQyxNQUFNSCxDQUFOLENBQVMsQ0FBRSxDLEdBRVRTLENBQUFBLFFBQVEsR0FBR04sZUFBSCxFQUFxQixDQUFFTyxPQUFPLEdBQVQsQyxDQUM3QkMsVUFBVSxDQUFHLFdBQWFDLENBQUFBLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFiLENBQTZDLE9BQTdDLENBQXVELFksQ0FHeEUsUUFBU0MsQ0FBQUEsYUFBVCxFQUFzQixDQUNwQlYsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixnQkFBeEIsQ0FB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RCxDQUFmLENBQW1CckIsU0FBbkIsQ0FBNkJ1QixNQUE3QixDQUFvQyxRQUFwQyxFQUVGNUMsQ0FBQyxDQUFDd0MsTUFBRixDQUFTbkIsU0FBVCxDQUFtQjBDLEdBQW5CLENBQXVCLFFBQXZCLENBQ0QsQ0FDRixDQVBELEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsZWZ0OiAzNywgdXA6IDM4LCByaWdodDogMzksIGRvd246IDQwLFxyXG4vLyBzcGFjZWJhcjogMzIsIHBhZ2V1cDogMzMsIHBhZ2Vkb3duOiAzNCwgZW5kOiAzNSwgaG9tZTogMzZcclxudmFyIGtleXMgPSB7Mzc6IDEsIDM4OiAxLCAzOTogMSwgNDA6IDF9O1xyXG5cclxuZnVuY3Rpb24gcHJldmVudERlZmF1bHQoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJldmVudERlZmF1bHRGb3JTY3JvbGxLZXlzKGUpIHtcclxuICBpZiAoa2V5c1tlLmtleUNvZGVdKSB7XHJcbiAgICBwcmV2ZW50RGVmYXVsdChlKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbi8vIG1vZGVybiBDaHJvbWUgcmVxdWlyZXMgeyBwYXNzaXZlOiBmYWxzZSB9IHdoZW4gYWRkaW5nIGV2ZW50XHJcbnZhciBzdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcclxudHJ5IHtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRlc3RcIiwgbnVsbCwgT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcclxuICAgIGdldDogZnVuY3Rpb24gKCkgeyBzdXBwb3J0c1Bhc3NpdmUgPSB0cnVlOyB9IFxyXG4gIH0pKTtcclxufSBjYXRjaChlKSB7fVxyXG5cclxudmFyIHdoZWVsT3B0ID0gc3VwcG9ydHNQYXNzaXZlID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2U7XHJcbnZhciB3aGVlbEV2ZW50ID0gJ29ud2hlZWwnIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpID8gJ3doZWVsJyA6ICdtb3VzZXdoZWVsJztcclxuXHJcbi8vIGNhbGwgdGhpcyB0byBEaXNhYmxlXHJcbmZ1bmN0aW9uIGRpc2FibGVTY3JvbGwoKSB7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTU1vdXNlU2Nyb2xsJywgcHJldmVudERlZmF1bHQsIGZhbHNlKTsgLy8gb2xkZXIgRkZcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcih3aGVlbEV2ZW50LCBwcmV2ZW50RGVmYXVsdCwgd2hlZWxPcHQpOyAvLyBtb2Rlcm4gZGVza3RvcFxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBwcmV2ZW50RGVmYXVsdCwgd2hlZWxPcHQpOyAvLyBtb2JpbGVcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHByZXZlbnREZWZhdWx0Rm9yU2Nyb2xsS2V5cywgZmFsc2UpO1xyXG59XHJcblxyXG4vLyBjYWxsIHRoaXMgdG8gRW5hYmxlXHJcbmZ1bmN0aW9uIGVuYWJsZVNjcm9sbCgpIHtcclxuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCBwcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xyXG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKHdoZWVsRXZlbnQsIHByZXZlbnREZWZhdWx0LCB3aGVlbE9wdCk7IFxyXG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBwcmV2ZW50RGVmYXVsdCwgd2hlZWxPcHQpO1xyXG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgcHJldmVudERlZmF1bHRGb3JTY3JvbGxLZXlzLCBmYWxzZSk7XHJcbn1cclxuXHJcblxyXG5jb25zdCBkcm9wQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhZGVyX19sYW5nLWJ0bicpXHJcbmZ1bmN0aW9uIGFkZEFjdGl2ZURyb3AoZWwpe1xyXG4gIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG59XHJcblxyXG5cclxuLy8gSGVhZGVyIE1lbnVcclxuY29uc3QgaGVhZGVyQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCA9XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX21haW4tYnV0dG9uXCIpO1xyXG5jb25zdCBoZWFkZXJNZW51OiBIVE1MVUxpc3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2xlZnRcIik7XHJcbmxldCBtZW51T3BlbmVkID0gZmFsc2U7XHJcbmNvbnN0IG1lbnVUb2dnbGUgPSAoKSA9PiB7XHJcbiAgbWVudU9wZW5lZCA9ICFtZW51T3BlbmVkO1xyXG4gIGNoZWNrTWVudSgpO1xyXG4gIGNoZWNrTWVudTIoKVxyXG4gIGhlYWRlckJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcclxuICBoZWFkZXJNZW51LmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY2hlY2tNZW51KCl7XHJcbiAgaWYobWVudU9wZW5lZCl7XHJcbiAgICBkaXNhYmxlU2Nyb2xsKClcclxuICB9ZWxzZXtcclxuICAgIGVuYWJsZVNjcm9sbCgpXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja01lbnUyKCl7XHJcbiAgaWYobWVudU9wZW5lZDIpe1xyXG4gICAgbWVudVRvZ2dsZTIoKVxyXG4gIH1cclxufVxyXG5cclxuaGVhZGVyQnV0dG9uLm9uY2xpY2sgPSBtZW51VG9nZ2xlO1xyXG5cclxuLy8gSGVhZGVyIE1lbnVcclxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX3JpZ2h0LW1lbnUtYnV0dG9uMlwiKSl7XHJcbiAgY29uc3QgaGVhZGVyQnV0dG9uMzogSFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fcmlnaHQtbWVudS1idXR0b24yXCIpO1xyXG4gIGNvbnN0IGhlYWRlck1lbnUzOiBIVE1MVUxpc3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX3JpZ2h0LW1lbnUtY29udGVudFwiKTtcclxuICBsZXQgbWVudU9wZW5lZDMgPSBmYWxzZTtcclxuICBjb25zdCBtZW51VG9nZ2xlMyA9ICgpID0+IHtcclxuICAgIG1lbnVPcGVuZWQzID0gIW1lbnVPcGVuZWQzO1xyXG4gICAgY2hlY2tNZW51MygpO1xyXG4gICAgY2hlY2tNZW51MigpXHJcbiAgICBoZWFkZXJCdXR0b24zLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xyXG4gICAgaGVhZGVyTWVudTMuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XHJcbiAgfTtcclxuICBcclxuICBmdW5jdGlvbiBjaGVja01lbnUzKCl7XHJcbiAgICBpZihtZW51T3BlbmVkMyl7XHJcbiAgICAgIGRpc2FibGVTY3JvbGwoKVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIGVuYWJsZVNjcm9sbCgpXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIGhlYWRlckJ1dHRvbjMub25jbGljayA9IG1lbnVUb2dnbGUzO1xyXG59XHJcblxyXG5cclxud2luZG93Lm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gIGlmIChtZW51T3BlbmVkICYmICFlLmNvbXBvc2VkUGF0aCgpLmluY2x1ZGVzKGhlYWRlckJ1dHRvbikgJiYgIWUuY29tcG9zZWRQYXRoKCkuaW5jbHVkZXMoaGVhZGVyTWVudSkpe1xyXG4gICAgbWVudVRvZ2dsZSgpO1xyXG4gIH1cclxuICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2hlYWRlcl9fbGFuZy1pdGVtJykpe1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGRyb3BCdG4ubGVuZ3RoOyBpKyspe1xyXG4gICAgICBkcm9wQnRuW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgaGVhZGVyQnV0dG9uMjogSFRNTEJ1dHRvbkVsZW1lbnQgPVxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19yaWdodC1tZW51LWJ1dHRvblwiKTtcclxuY29uc3QgaGVhZGVyTWVudTI6IEhUTUxVTGlzdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fcmlnaHQtbWVudVwiKTtcclxubGV0IG1lbnVPcGVuZWQyID0gZmFsc2U7XHJcbmNvbnN0IG1lbnVUb2dnbGUyID0gKCkgPT4ge1xyXG4gIG1lbnVPcGVuZWQyID0gIW1lbnVPcGVuZWQyO1xyXG4gIGhlYWRlckJ1dHRvbjIuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XHJcbiAgaGVhZGVyTWVudTIuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XHJcbn07XHJcblxyXG5oZWFkZXJCdXR0b24yLm9uY2xpY2sgPSBtZW51VG9nZ2xlMjtcclxuXHJcblxyXG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWwnKSl7XHJcbiAgJCgnLmNhcm91c2VsJykuc2xpY2soe1xyXG4gICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICB0b3VjaE1vdmU6IGZhbHNlLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogMTQwMCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICBdXHJcbiAgfSk7XHJcbn1cclxuXHJcblxyXG5sZXQgd2luZG93TGVzcyA9IGZhbHNlXHJcbmZ1bmN0aW9uIGNoZWNrV2luZG93U2l6ZSgpe1xyXG4gIGlmKHdpbmRvdy5pbm5lcldpZHRoIDwgMTQwMCl7XHJcbiAgICB3aW5kb3dMZXNzID0gdHJ1ZVxyXG4gIH1lbHNle1xyXG4gICAgd2luZG93TGVzcyA9IGZhbHNlXHJcbiAgfVxyXG59XHJcbmlmKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2N1c3RvbS1jb250YWluZXInKSl7XHJcbiAgdmFyIG11c3RSZW1vdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjdXN0b20tY29udGFpbmVyJyk7XHJcbn1cclxuZnVuY3Rpb24gY2hlY2tXaW5kb3coKXtcclxuICBjaGVja1dpbmRvd1NpemUoKVxyXG4gIGlmKHdpbmRvd0xlc3Mpe1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG11c3RSZW1vdmUubGVuZ3RoOyBpKyspe1xyXG4gICAgICBtdXN0UmVtb3ZlW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbnRhaW5lci1zbScpXHJcbiAgICAgIG11c3RSZW1vdmVbaV0uY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJylcclxuICAgIH1cclxuICB9ZWxzZXtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBtdXN0UmVtb3ZlLmxlbmd0aDsgaSsrKXtcclxuICAgICAgbXVzdFJlbW92ZVtpXS5jbGFzc0xpc3QuYWRkKCdjb250YWluZXItc20nKVxyXG4gICAgICBtdXN0UmVtb3ZlW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbnRhaW5lcicpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbndpbmRvdy5vbmxvYWQgPSBjaGVja1dpbmRvd1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oKXtcclxuICBjaGVja1dpbmRvdygpXHJcbn0pXHJcblxyXG5pZihkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzcG9ydHNfX3RvcC1pdGVtJykpe1xyXG4gIGxldCBzcG9ydHNJdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3BvcnRzX190b3AtaXRlbScpO1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzcG9ydHNfX3RvcC1pdGVtJykpe1xyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3BvcnRzSXRlbS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgc3BvcnRzSXRlbVtpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgfVxyXG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICB9KSBcclxufVxyXG5cclxuZnVuY3Rpb24gaGVhZGVyRHJvcE9wZW4oZWwpe1xyXG4gIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY2hhbmdlUHJvZmlsZURhdGEoZWwpe1xyXG4gIGxldCBkYXRhUm93cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2ZpbGVfX2RhdGEtcm93JylcclxuICBsZXQgc2F2ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19kYXRhLXNhdmUnKVxyXG4gIGxldCBjYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fZGF0YS1jYW5jZWwnKVxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgaWYoZS50YXJnZXQgPT0gc2F2ZUJ0bil7XHJcbiAgICAgIHNhdmVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBlbC5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBlbC5jaGlsZE5vZGVzWzBdLmRpc2FibGVkID0gdHJ1ZVxyXG4gICAgICAgIGVsLmNoaWxkTm9kZXNbMV0uaW5uZXJIVE1MID0gXCI8aW1nIHNyYz0naW1hZ2VzL2VkaXQuc3ZnJz5cIlxyXG4gICAgICB9XHJcbiAgICB9ZWxzZSBpZihlLnRhcmdldCA9PSBjYW5jZWxCdG4pe1xyXG4gICAgICBzYXZlQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZWwuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgZWwuY2hpbGROb2Rlc1swXS5kaXNhYmxlZCA9IHRydWVcclxuICAgICAgICBlbC5jaGlsZE5vZGVzWzFdLmlubmVySFRNTCA9IFwiPGltZyBzcmM9J2ltYWdlcy9lZGl0LnN2Zyc+XCJcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgfSlcclxuICBmdW5jdGlvbiBjaGVja1Byb2ZpbGVJbnB1dHMoKXtcclxuICAgIGNvbnNvbGUubG9nKCdjaGVjaycpO1xyXG4gICAgXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZGF0YVJvd3MubGVuZ3RoOyBpKyspe1xyXG4gICAgICBpZihkYXRhUm93c1tpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnYm9yJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2F2ZUJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXHJcbiAgaWYoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSl7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZWwuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgIGVsLmNoaWxkTm9kZXNbMF0uZGlzYWJsZWQgPSBmYWxzZVxyXG4gICAgICBlbC5jaGlsZE5vZGVzWzFdLmlubmVySFRNTCA9IFwiPGltZyBzcmM9J2ltYWdlcy9jb3JyZWN0LnN2Zyc+XCJcclxuICAgICAgY2hlY2tQcm9maWxlSW5wdXRzKClcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZXtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBlbC5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgZWwuY2hpbGROb2Rlc1swXS5kaXNhYmxlZCA9IHRydWVcclxuICAgICAgZWwuY2hpbGROb2Rlc1sxXS5pbm5lckhUTUwgPSBcIjxpbWcgc3JjPSdpbWFnZXMvZWRpdC5zdmcnPlwiXHJcbiAgICAgIGNoZWNrUHJvZmlsZUlucHV0cygpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxubGV0IHZlcmlmaWNhdGlvbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ZlcmlmaWNhdGlvbl9fdG9wLWJ0bicpXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snIGZ1bmN0aW9uKGUpe1xyXG4gIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndmVyaWZpY2F0aW9uX190b3AtYnRuJykpe1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHZlcmlmaWNhdGlvbkJ0bi5sZW5ndGg7IGkrKyl7XHJcbiAgICAgIHZlcmlmaWNhdGlvbkJ0bltpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgfVxyXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICB9XHJcbn0pIl19
