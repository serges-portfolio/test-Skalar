//popup show/hide
var singButton = document.querySelector('#sing'),
    popup = document.querySelector('.sing-popup');

    singButton.addEventListener('click', function(){
        popup.classList.toggle('visible');
    });

window.onclick = function(event) {
    if (event.target == popup) {
        popup.classList.toggle('visible');
    }
};


//select-customization init
$(document).ready(function() {
    $('.custom-select').niceSelect();
});

//all categories menu
var generalList = document.querySelector(".-all-list");
var hiddenList = document.querySelector(".header__hidden-list");

generalList.onclick = function (closed) {
    hiddenList.classList.toggle("header__active-list");
    /*if (closed.target !== generalList) {
        hiddenList.classList.remove('header__active-list');
    };*/
};

// if (hiddenList.classList.contains("header__active-list") ) {
//         body.onclick = function () {
//             hiddenList.classList.remove('header__active-list');
//         };
//     }


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcyIsIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUE7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7QUN2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL3BvcHVwIHNob3cvaGlkZVxyXG52YXIgc2luZ0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaW5nJyksXHJcbiAgICBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaW5nLXBvcHVwJyk7XHJcblxyXG4gICAgc2luZ0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnRvZ2dsZSgndmlzaWJsZScpO1xyXG4gICAgfSk7XHJcblxyXG53aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09IHBvcHVwKSB7XHJcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnRvZ2dsZSgndmlzaWJsZScpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbi8vc2VsZWN0LWN1c3RvbWl6YXRpb24gaW5pdFxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICQoJy5jdXN0b20tc2VsZWN0JykubmljZVNlbGVjdCgpO1xyXG59KTtcclxuXHJcbi8vYWxsIGNhdGVnb3JpZXMgbWVudVxyXG52YXIgZ2VuZXJhbExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLi1hbGwtbGlzdFwiKTtcclxudmFyIGhpZGRlbkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9faGlkZGVuLWxpc3RcIik7XHJcblxyXG5nZW5lcmFsTGlzdC5vbmNsaWNrID0gZnVuY3Rpb24gKGNsb3NlZCkge1xyXG4gICAgaGlkZGVuTGlzdC5jbGFzc0xpc3QudG9nZ2xlKFwiaGVhZGVyX19hY3RpdmUtbGlzdFwiKTtcclxuICAgIC8qaWYgKGNsb3NlZC50YXJnZXQgIT09IGdlbmVyYWxMaXN0KSB7XHJcbiAgICAgICAgaGlkZGVuTGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX2FjdGl2ZS1saXN0Jyk7XHJcbiAgICB9OyovXHJcbn07XHJcblxyXG4vLyBpZiAoaGlkZGVuTGlzdC5jbGFzc0xpc3QuY29udGFpbnMoXCJoZWFkZXJfX2FjdGl2ZS1saXN0XCIpICkge1xyXG4vLyAgICAgICAgIGJvZHkub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICAgICAgICAgaGlkZGVuTGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX2FjdGl2ZS1saXN0Jyk7XHJcbi8vICAgICAgICAgfTtcclxuLy8gICAgIH1cclxuIiwiXHJcbi8vPWluY2x1ZGUgLi4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzXHJcbiJdfQ==
