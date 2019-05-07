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