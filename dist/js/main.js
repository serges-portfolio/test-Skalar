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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcyIsIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUE7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL3BvcHVwIHNob3cvaGlkZVxyXG52YXIgc2luZ0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaW5nJyksXHJcbiAgICBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaW5nLXBvcHVwJyk7XHJcblxyXG4gICAgc2luZ0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnRvZ2dsZSgndmlzaWJsZScpO1xyXG4gICAgfSk7XHJcblxyXG53aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09IHBvcHVwKSB7XHJcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnRvZ2dsZSgndmlzaWJsZScpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbi8vc2VsZWN0LWN1c3RvbWl6YXRpb24gaW5pdFxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICQoJy5jdXN0b20tc2VsZWN0JykubmljZVNlbGVjdCgpO1xyXG59KTsiLCJcclxuLy89aW5jbHVkZSAuLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanNcclxuIl19
