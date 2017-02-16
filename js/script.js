$(function() {

    //Hover functionality
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

    // Add seats clicked to an array or move selected seats out of array when selected again
    var clickedSeats = [];

    $('.reclinerSeat').on("click", function(event) {
        var id = event.target.id;
        if ($.inArray(id, clickedSeats) > -1) {
            clickedSeats.splice($.inArray(id, clickedSeats), 1);
            console.log(clickedSeats);
        } else {
            clickedSeats.push(id);
            console.log(clickedSeats);
        };
        $('#seatList').text(clickedSeats);

    });

    $('.regularSeat').on("click", function(event) {
        var id = event.target.id;
        if ($.inArray(id, clickedSeats) > -1) {
            clickedSeats.splice($.inArray(id, clickedSeats), 1);
            console.log(clickedSeats);
        } else {
            clickedSeats.push(id);
            console.log(clickedSeats);
        };
        $('#seatList').text(clickedSeats);

    });


    //remove event handlers from seats once reserved and mark them as reserved.

    $('#reserveButton').on('click', function() {
        clickedSeats.forEach(function(i) {
            var idTemp = '#' + i;
            var lastName = $('#lastName1').val();
            $(idTemp).removeClass('selectedSeat').addClass('reservedSeat').off('click').html(i + '<br>' + '<span class="pStyling">' + lastName + '</span>');
        });


        clickedSeats = [];
    });



    // $('.reclinerSeat').hover(function(){
    //     $('div span').removeClass('pStyling').next().stop(true,true);
    // });






    //Reset modal upon exit
    $('.modal').on('hidden.bs.modal', function() {
        $(this).find('form')[0].reset();
    });



});

// $(document).ready(function(){
//     $("button").click(function(){
//         var div = $("div");
//         div.animate({height: '100%px', opacity: '0.8'}, "slow");
//         div.animate({height: '300px', opacity: '0.6'}, "slow");
//         div.animate({height: '600px', opacity: '0.4'}, "slow");
//         div.animate({height: '10%', opacity: '0.0'}, "slow");
//
//     });
// });
//
