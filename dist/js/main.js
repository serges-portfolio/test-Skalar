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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcyIsIm1haW4uanMiLCIuLi9jb21wb25lbnRzL3NtYXJ0L3NtYXJ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vcG9wdXAgc2hvdy9oaWRlXHJcbnZhciBzaW5nQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpbmcnKSxcclxuICAgIHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpbmctcG9wdXAnKTtcclxuXHJcbiAgICBzaW5nQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBwb3B1cC5jbGFzc0xpc3QudG9nZ2xlKCd2aXNpYmxlJyk7XHJcbiAgICB9KTtcclxuXHJcbndpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGlmIChldmVudC50YXJnZXQgPT0gcG9wdXApIHtcclxuICAgICAgICBwb3B1cC5jbGFzc0xpc3QudG9nZ2xlKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuLy9zZWxlY3QtY3VzdG9taXphdGlvbiBpbml0XHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLmN1c3RvbS1zZWxlY3QnKS5uaWNlU2VsZWN0KCk7XHJcbn0pO1xyXG5cclxuLy9hbGwgY2F0ZWdvcmllcyBtZW51XHJcbnZhciBnZW5lcmFsTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuLWFsbC1saXN0XCIpO1xyXG52YXIgaGlkZGVuTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19oaWRkZW4tbGlzdFwiKTtcclxuXHJcbmdlbmVyYWxMaXN0Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBoaWRkZW5MaXN0LmNsYXNzTGlzdC50b2dnbGUoXCJoZWFkZXJfX2FjdGl2ZS1saXN0XCIpO1xyXG59O1xyXG4iLCJcclxuLy89aW5jbHVkZSAuLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanNcclxuLy89aW5jbHVkZSAuLi9jb21wb25lbnRzL3NtYXJ0L3NtYXJ0LmpzIiwiLy9zaG93LWhpZGUgZmlsdGVyXHJcbnZhciBzaG93Qm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbWFydF9fZmlsdGVyLWhlYWRcIik7XHJcbnZhciByb3RhdGVBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc21hcnRfX2ZpbHRlci1hcnJvd1wiKTtcclxuXHJcbmZvciAoIGxldCBpID0gMDsgaSA8IHNob3dCb3gubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIHNob3dCb3hbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcInNtYXJ0X19vcGVuZWQtZmlsdGVyXCIpO1xyXG5cclxuICAgIH0pO1xyXG59XHJcblxyXG4vL3JhbmdlLXByaWNlIGluaXRcclxuJCggZnVuY3Rpb24oKSB7XHJcbiAgICAkKCBcIiNzbGlkZXItcmFuZ2VcIiApLnNsaWRlcih7XHJcbiAgICAgICAgcmFuZ2U6IHRydWUsXHJcbiAgICAgICAgbWluOiAyMSxcclxuICAgICAgICBtYXg6IDEwMDEsXHJcbiAgICAgICAgdmFsdWVzOiBbIDcyLCA4OTkgXSxcclxuICAgICAgICBzbGlkZTogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcclxuICAgICAgICAgICAgJCggXCIjbWluLXZhbHVlXCIgKS52YWwoIHVpLnZhbHVlc1sgMCBdICk7XHJcbiAgICAgICAgICAgICQoIFwiI21heC12YWx1ZVwiICkudmFsKHVpLnZhbHVlc1sgMSBdKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAkKCBcIiNtaW4tdmFsdWVcIiApLnZhbCgkKCBcIiNzbGlkZXItcmFuZ2VcIiApLnNsaWRlciggXCJ2YWx1ZXNcIiwgMCApKTtcclxuICAgICQoIFwiI21heC12YWx1ZVwiICkudmFsKCQoIFwiI3NsaWRlci1yYW5nZVwiICkuc2xpZGVyKCBcInZhbHVlc1wiLCAxICkpO1xyXG5cclxufSApO1xyXG5cclxuLy9zaG93LW1vcmUgZmlsdGVyXHJcbnZhciBzaG93Q2hlY2tJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbWFydF9fbW9yZS1idXR0b25cIik7XHJcblxyXG5mb3IgKCBsZXQgaSA9IDA7IGkgPCBzaG93Q2hlY2tJdGVtLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgc2hvd0NoZWNrSXRlbVtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCItb3RoZXItY2hlY2tib3hlcy1kaXNhYmxlXCIpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vc29ydCBhY3RpdmVcclxuXHJcbnZhciB0YWJDaGFuZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNtYXJ0X19zb3J0LW5hbWVcIik7XHJcbnZhciBzb3J0T3JpZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNtYXJ0X190eXBlXCIpO1xyXG5cclxuZnVuY3Rpb24gdGFiVG9nZ2xlKGVsZW1lbnRzLCBjbGFzc05hbWUpIHtcclxuICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKHRhYikge1xyXG4gICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjb25zdCBhY3RpdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSlbMF07XHJcbiAgICAgICAgICAgIGFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcbnRhYlRvZ2dsZSh0YWJDaGFuZ2UsICdzbWFydF9fYWN0aXZlLXNvcnQnKTtcclxudGFiVG9nZ2xlKHNvcnRPcmllbnRhdGlvbiwgJ3NtYXJ0X190eXBlLWltYWdlLWFjdGl2ZScpO1xyXG5cclxuIl19
