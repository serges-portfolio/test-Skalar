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
