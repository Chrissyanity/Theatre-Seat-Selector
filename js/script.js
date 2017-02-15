$(function() {

    $('.reclinerSeat').on('mouseover', function() {
        $(this).addClass('hover')
    }).on('mouseleave', function() {
        $(this).removeClass('hover')
    });

    $('.regularSeat').on('mouseover', function() {
        $(this).addClass('hover')
    }).on('mouseleave', function() {
        $(this).removeClass('hover')
    });



//toggle color on selected seats so users can unselect seats on second click.
    $('.reclinerSeat').click(function() {
        $(this).toggleClass("selectedSeat");
    });

    $('.regularSeat').click(function() {
        $(this).toggleClass("selectedSeat");
    });


var clickedSeats = [];

$('.reclinerSeat').on("click", function(event) {
var id = event.target.id;
clickedSeats.push(id);
console.log(clickedSeats);

});

$('.regularSeat').on("click", function(event) {
var id = event.target.id;
clickedSeats.push(id);
console.log(clickedSeats);

});











});
