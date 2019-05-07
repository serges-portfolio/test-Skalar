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

for (i = 0; i < showBox.length; i++) {

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

for (i = 0; i < showCheckItem.length; i++) {

    showCheckItem[i].addEventListener("click", function() {
        this.parentElement.classList.toggle("-other-checkboxes-disable");
    });
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcyIsIm1haW4uanMiLCIuLi9jb21wb25lbnRzL3NtYXJ0L3NtYXJ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9wb3B1cCBzaG93L2hpZGVcclxudmFyIHNpbmdCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2luZycpLFxyXG4gICAgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2luZy1wb3B1cCcpO1xyXG5cclxuICAgIHNpbmdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc2libGUnKTtcclxuICAgIH0pO1xyXG5cclxud2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PSBwb3B1cCkge1xyXG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc2libGUnKTtcclxuICAgIH1cclxufTtcclxuXHJcblxyXG4vL3NlbGVjdC1jdXN0b21pemF0aW9uIGluaXRcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcuY3VzdG9tLXNlbGVjdCcpLm5pY2VTZWxlY3QoKTtcclxufSk7XHJcblxyXG4vL2FsbCBjYXRlZ29yaWVzIG1lbnVcclxudmFyIGdlbmVyYWxMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi4tYWxsLWxpc3RcIik7XHJcbnZhciBoaWRkZW5MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2hpZGRlbi1saXN0XCIpO1xyXG5cclxuZ2VuZXJhbExpc3Qub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGhpZGRlbkxpc3QuY2xhc3NMaXN0LnRvZ2dsZShcImhlYWRlcl9fYWN0aXZlLWxpc3RcIik7XHJcbn07XHJcbiIsIlxyXG4vLz1pbmNsdWRlIC4uL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qc1xyXG4vLz1pbmNsdWRlIC4uL2NvbXBvbmVudHMvc21hcnQvc21hcnQuanMiLCIvL3Nob3ctaGlkZSBmaWx0ZXJcclxudmFyIHNob3dCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNtYXJ0X19maWx0ZXItaGVhZFwiKTtcclxudmFyIHJvdGF0ZUFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbWFydF9fZmlsdGVyLWFycm93XCIpO1xyXG5cclxuZm9yIChpID0gMDsgaSA8IHNob3dCb3gubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIHNob3dCb3hbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcInNtYXJ0X19vcGVuZWQtZmlsdGVyXCIpO1xyXG5cclxuICAgIH0pO1xyXG59XHJcblxyXG4vL3JhbmdlLXByaWNlIGluaXRcclxuJCggZnVuY3Rpb24oKSB7XHJcbiAgICAkKCBcIiNzbGlkZXItcmFuZ2VcIiApLnNsaWRlcih7XHJcbiAgICAgICAgcmFuZ2U6IHRydWUsXHJcbiAgICAgICAgbWluOiAyMSxcclxuICAgICAgICBtYXg6IDEwMDEsXHJcbiAgICAgICAgdmFsdWVzOiBbIDcyLCA4OTkgXSxcclxuICAgICAgICBzbGlkZTogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcclxuICAgICAgICAgICAgJCggXCIjbWluLXZhbHVlXCIgKS52YWwoIHVpLnZhbHVlc1sgMCBdICk7XHJcbiAgICAgICAgICAgICQoIFwiI21heC12YWx1ZVwiICkudmFsKHVpLnZhbHVlc1sgMSBdKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAkKCBcIiNtaW4tdmFsdWVcIiApLnZhbCgkKCBcIiNzbGlkZXItcmFuZ2VcIiApLnNsaWRlciggXCJ2YWx1ZXNcIiwgMCApKTtcclxuICAgICQoIFwiI21heC12YWx1ZVwiICkudmFsKCQoIFwiI3NsaWRlci1yYW5nZVwiICkuc2xpZGVyKCBcInZhbHVlc1wiLCAxICkpO1xyXG5cclxufSApO1xyXG5cclxuLy9zaG93LW1vcmUgZmlsdGVyXHJcbnZhciBzaG93Q2hlY2tJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbWFydF9fbW9yZS1idXR0b25cIik7XHJcblxyXG5mb3IgKGkgPSAwOyBpIDwgc2hvd0NoZWNrSXRlbS5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgIHNob3dDaGVja0l0ZW1baV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiLW90aGVyLWNoZWNrYm94ZXMtZGlzYWJsZVwiKTtcclxuICAgIH0pO1xyXG59Il19
