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

generalList.onclick = function () {
    hiddenList.classList.toggle("header__active-list");
};

//show-hide filter
var showBox = document.querySelectorAll(".smart__filter-head");
var rotateArrow = document.querySelectorAll(".smart__filter-arrow");

for ( let i = 0; i < showBox.length; i++) {

            showBox[i].addEventListener("click", function() {
            this.parentElement.classList.toggle("smart__opened-filter");

    });
}

//range-price init
$( function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 21,
        max: 1001,
        values: [ 72, 899 ],
        slide: function( event, ui ) {
            $( "#min-value" ).val( ui.values[ 0 ] );
            $( "#max-value" ).val(ui.values[ 1 ]);

        }
    });
    $( "#min-value" ).val($( "#slider-range" ).slider( "values", 0 ));
    $( "#max-value" ).val($( "#slider-range" ).slider( "values", 1 ));

} );

//show-more filter
var showCheckItem = document.querySelectorAll(".smart__more-button");

for ( let i = 0; i < showCheckItem.length; i++) {

    showCheckItem[i].addEventListener("click", function() {
        this.parentElement.classList.toggle("-other-checkboxes-disable");
    });
}

//sort active

var tabChange = document.querySelectorAll(".smart__sort-name");
var sortOrientation = document.querySelectorAll(".smart__type");

function tabToggle(elements, className) {
    elements.forEach(function (tab) {
        tab.addEventListener('click', function() {
            const active = document.getElementsByClassName(className)[0];
            active.classList.remove(className);
            this.classList.add(className);
        })
    })
}
tabToggle(tabChange, 'smart__active-sort');
tabToggle(sortOrientation, 'smart__type-image-active');


var shopList = document.querySelector(".footer__item-name");
var disableList = document.querySelector(".footer__multiple-item");

shopList.onclick = function () {
    disableList.classList.toggle("-move");

};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcyIsIm1haW4uanMiLCIuLi9jb21wb25lbnRzL3NtYXJ0L3NtYXJ0LmpzIiwiLi4vY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QURwRkE7QUU5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vcG9wdXAgc2hvdy9oaWRlXHJcbnZhciBzaW5nQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpbmcnKSxcclxuICAgIHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpbmctcG9wdXAnKTtcclxuXHJcbiAgICBzaW5nQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBwb3B1cC5jbGFzc0xpc3QudG9nZ2xlKCd2aXNpYmxlJyk7XHJcbiAgICB9KTtcclxuXHJcbndpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGlmIChldmVudC50YXJnZXQgPT0gcG9wdXApIHtcclxuICAgICAgICBwb3B1cC5jbGFzc0xpc3QudG9nZ2xlKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vL3NlbGVjdC1jdXN0b21pemF0aW9uIGluaXRcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcuY3VzdG9tLXNlbGVjdCcpLm5pY2VTZWxlY3QoKTtcclxufSk7XHJcblxyXG4vL2FsbCBjYXRlZ29yaWVzIG1lbnVcclxudmFyIGdlbmVyYWxMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi4tYWxsLWxpc3RcIik7XHJcbnZhciBoaWRkZW5MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2hpZGRlbi1saXN0XCIpO1xyXG5cclxuZ2VuZXJhbExpc3Qub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGhpZGRlbkxpc3QuY2xhc3NMaXN0LnRvZ2dsZShcImhlYWRlcl9fYWN0aXZlLWxpc3RcIik7XHJcbn07XHJcbiIsIlxyXG4vLz1pbmNsdWRlIC4uL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qc1xyXG4vLz1pbmNsdWRlIC4uL2NvbXBvbmVudHMvc21hcnQvc21hcnQuanNcclxuLy89aW5jbHVkZSAuLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuanMiLCIvL3Nob3ctaGlkZSBmaWx0ZXJcclxudmFyIHNob3dCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNtYXJ0X19maWx0ZXItaGVhZFwiKTtcclxudmFyIHJvdGF0ZUFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbWFydF9fZmlsdGVyLWFycm93XCIpO1xyXG5cclxuZm9yICggbGV0IGkgPSAwOyBpIDwgc2hvd0JveC5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgc2hvd0JveFtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwic21hcnRfX29wZW5lZC1maWx0ZXJcIik7XHJcblxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vcmFuZ2UtcHJpY2UgaW5pdFxyXG4kKCBmdW5jdGlvbigpIHtcclxuICAgICQoIFwiI3NsaWRlci1yYW5nZVwiICkuc2xpZGVyKHtcclxuICAgICAgICByYW5nZTogdHJ1ZSxcclxuICAgICAgICBtaW46IDIxLFxyXG4gICAgICAgIG1heDogMTAwMSxcclxuICAgICAgICB2YWx1ZXM6IFsgNzIsIDg5OSBdLFxyXG4gICAgICAgIHNsaWRlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xyXG4gICAgICAgICAgICAkKCBcIiNtaW4tdmFsdWVcIiApLnZhbCggdWkudmFsdWVzWyAwIF0gKTtcclxuICAgICAgICAgICAgJCggXCIjbWF4LXZhbHVlXCIgKS52YWwodWkudmFsdWVzWyAxIF0pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgICQoIFwiI21pbi12YWx1ZVwiICkudmFsKCQoIFwiI3NsaWRlci1yYW5nZVwiICkuc2xpZGVyKCBcInZhbHVlc1wiLCAwICkpO1xyXG4gICAgJCggXCIjbWF4LXZhbHVlXCIgKS52YWwoJCggXCIjc2xpZGVyLXJhbmdlXCIgKS5zbGlkZXIoIFwidmFsdWVzXCIsIDEgKSk7XHJcblxyXG59ICk7XHJcblxyXG4vL3Nob3ctbW9yZSBmaWx0ZXJcclxudmFyIHNob3dDaGVja0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNtYXJ0X19tb3JlLWJ1dHRvblwiKTtcclxuXHJcbmZvciAoIGxldCBpID0gMDsgaSA8IHNob3dDaGVja0l0ZW0ubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICBzaG93Q2hlY2tJdGVtW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcIi1vdGhlci1jaGVja2JveGVzLWRpc2FibGVcIik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy9zb3J0IGFjdGl2ZVxyXG5cclxudmFyIHRhYkNoYW5nZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc21hcnRfX3NvcnQtbmFtZVwiKTtcclxudmFyIHNvcnRPcmllbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc21hcnRfX3R5cGVcIik7XHJcblxyXG5mdW5jdGlvbiB0YWJUb2dnbGUoZWxlbWVudHMsIGNsYXNzTmFtZSkge1xyXG4gICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAodGFiKSB7XHJcbiAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lKVswXTtcclxuICAgICAgICAgICAgYWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxudGFiVG9nZ2xlKHRhYkNoYW5nZSwgJ3NtYXJ0X19hY3RpdmUtc29ydCcpO1xyXG50YWJUb2dnbGUoc29ydE9yaWVudGF0aW9uLCAnc21hcnRfX3R5cGUtaW1hZ2UtYWN0aXZlJyk7XHJcblxyXG4iLCJ2YXIgc2hvcExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvb3Rlcl9faXRlbS1uYW1lXCIpO1xyXG52YXIgZGlzYWJsZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvb3Rlcl9fbXVsdGlwbGUtaXRlbVwiKTtcclxuXHJcbnNob3BMaXN0Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBkaXNhYmxlTGlzdC5jbGFzc0xpc3QudG9nZ2xlKFwiLW1vdmVcIik7XHJcblxyXG59OyJdfQ==
