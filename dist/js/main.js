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

//mobile-filter visibility
var filterButton = document.querySelector(".smart__filter-button");
var hiddenFilter = document.querySelector(".smart__filter-box");

filterButton.addEventListener("click", function () {
    hiddenFilter.classList.toggle("show-filter");
});
/*hiddenFilter.target.addEventListener("click", function () {
    hiddenFilter.classList.remove("show-filter");
})*/

var shopList = document.querySelector(".footer__item-name");
var disableList = document.querySelector(".footer__multiple-item");

shopList.onclick = function () {
    disableList.classList.toggle("-move");

};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcyIsIm1haW4uanMiLCIuLi9jb21wb25lbnRzL3NtYXJ0L3NtYXJ0LmpzIiwiLi4vY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FEeEdBO0FFOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL3BvcHVwIHNob3cvaGlkZVxyXG52YXIgc2luZ0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaW5nJyksXHJcbiAgICBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaW5nLXBvcHVwJyk7XHJcblxyXG4gICAgc2luZ0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnRvZ2dsZSgndmlzaWJsZScpO1xyXG4gICAgfSk7XHJcblxyXG53aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09IHBvcHVwKSB7XHJcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnRvZ2dsZSgndmlzaWJsZScpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLy9zZWxlY3QtY3VzdG9taXphdGlvbiBpbml0XHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLmN1c3RvbS1zZWxlY3QnKS5uaWNlU2VsZWN0KCk7XHJcbn0pO1xyXG5cclxuLy9hbGwgY2F0ZWdvcmllcyBtZW51XHJcbnZhciBnZW5lcmFsTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuLWFsbC1saXN0XCIpO1xyXG52YXIgaGlkZGVuTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19oaWRkZW4tbGlzdFwiKTtcclxuXHJcbmdlbmVyYWxMaXN0Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBoaWRkZW5MaXN0LmNsYXNzTGlzdC50b2dnbGUoXCJoZWFkZXJfX2FjdGl2ZS1saXN0XCIpO1xyXG59O1xyXG4iLCJcclxuLy89aW5jbHVkZSAuLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanNcclxuLy89aW5jbHVkZSAuLi9jb21wb25lbnRzL3NtYXJ0L3NtYXJ0LmpzXHJcbi8vPWluY2x1ZGUgLi4vY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmpzIiwiLy9zaG93LWhpZGUgZmlsdGVyXHJcbnZhciBzaG93Qm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbWFydF9fZmlsdGVyLWhlYWRcIik7XHJcbnZhciByb3RhdGVBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc21hcnRfX2ZpbHRlci1hcnJvd1wiKTtcclxuXHJcbmZvciAoIGxldCBpID0gMDsgaSA8IHNob3dCb3gubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIHNob3dCb3hbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcInNtYXJ0X19vcGVuZWQtZmlsdGVyXCIpO1xyXG5cclxuICAgIH0pO1xyXG59XHJcblxyXG4vL3JhbmdlLXByaWNlIGluaXRcclxuJCggZnVuY3Rpb24oKSB7XHJcbiAgICAkKCBcIiNzbGlkZXItcmFuZ2VcIiApLnNsaWRlcih7XHJcbiAgICAgICAgcmFuZ2U6IHRydWUsXHJcbiAgICAgICAgbWluOiAyMSxcclxuICAgICAgICBtYXg6IDEwMDEsXHJcbiAgICAgICAgdmFsdWVzOiBbIDcyLCA4OTkgXSxcclxuICAgICAgICBzbGlkZTogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcclxuICAgICAgICAgICAgJCggXCIjbWluLXZhbHVlXCIgKS52YWwoIHVpLnZhbHVlc1sgMCBdICk7XHJcbiAgICAgICAgICAgICQoIFwiI21heC12YWx1ZVwiICkudmFsKHVpLnZhbHVlc1sgMSBdKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAkKCBcIiNtaW4tdmFsdWVcIiApLnZhbCgkKCBcIiNzbGlkZXItcmFuZ2VcIiApLnNsaWRlciggXCJ2YWx1ZXNcIiwgMCApKTtcclxuICAgICQoIFwiI21heC12YWx1ZVwiICkudmFsKCQoIFwiI3NsaWRlci1yYW5nZVwiICkuc2xpZGVyKCBcInZhbHVlc1wiLCAxICkpO1xyXG5cclxufSApO1xyXG5cclxuLy9zaG93LW1vcmUgZmlsdGVyXHJcbnZhciBzaG93Q2hlY2tJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbWFydF9fbW9yZS1idXR0b25cIik7XHJcblxyXG5mb3IgKCBsZXQgaSA9IDA7IGkgPCBzaG93Q2hlY2tJdGVtLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgc2hvd0NoZWNrSXRlbVtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCItb3RoZXItY2hlY2tib3hlcy1kaXNhYmxlXCIpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vc29ydCBhY3RpdmVcclxuXHJcbnZhciB0YWJDaGFuZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNtYXJ0X19zb3J0LW5hbWVcIik7XHJcbnZhciBzb3J0T3JpZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNtYXJ0X190eXBlXCIpO1xyXG5cclxuZnVuY3Rpb24gdGFiVG9nZ2xlKGVsZW1lbnRzLCBjbGFzc05hbWUpIHtcclxuICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKHRhYikge1xyXG4gICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjb25zdCBhY3RpdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSlbMF07XHJcbiAgICAgICAgICAgIGFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcbnRhYlRvZ2dsZSh0YWJDaGFuZ2UsICdzbWFydF9fYWN0aXZlLXNvcnQnKTtcclxudGFiVG9nZ2xlKHNvcnRPcmllbnRhdGlvbiwgJ3NtYXJ0X190eXBlLWltYWdlLWFjdGl2ZScpO1xyXG5cclxuLy9tb2JpbGUtZmlsdGVyIHZpc2liaWxpdHlcclxudmFyIGZpbHRlckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc21hcnRfX2ZpbHRlci1idXR0b25cIik7XHJcbnZhciBoaWRkZW5GaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNtYXJ0X19maWx0ZXItYm94XCIpO1xyXG5cclxuZmlsdGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBoaWRkZW5GaWx0ZXIuY2xhc3NMaXN0LnRvZ2dsZShcInNob3ctZmlsdGVyXCIpO1xyXG59KTtcclxuLypoaWRkZW5GaWx0ZXIudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBoaWRkZW5GaWx0ZXIuY2xhc3NMaXN0LnJlbW92ZShcInNob3ctZmlsdGVyXCIpO1xyXG59KSovXHJcbiIsInZhciBzaG9wTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9vdGVyX19pdGVtLW5hbWVcIik7XHJcbnZhciBkaXNhYmxlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9vdGVyX19tdWx0aXBsZS1pdGVtXCIpO1xyXG5cclxuc2hvcExpc3Qub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGRpc2FibGVMaXN0LmNsYXNzTGlzdC50b2dnbGUoXCItbW92ZVwiKTtcclxuXHJcbn07Il19
