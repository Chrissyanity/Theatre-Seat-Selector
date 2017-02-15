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

// Add seats clicked to an array
    var clickedSeats = [];

    $('.reclinerSeat').on("click",function(event) {
        var id = event.target.id;
        if ($.inArray( id, clickedSeats ) > -1 ) {
            var itemtoRemove = id;
            clickedSeats.splice($.inArray(id, clickedSeats),1);
            console.log(clickedSeats);
        } else {
        clickedSeats.push(id);
        console.log(clickedSeats);
    };
    $('#seatList').text(clickedSeats);

    });

    $('.regularSeat').on("click", function(event) {
        var id = event.target.id;
        if ($.inArray( id, clickedSeats ) > -1 ) {
            var itemtoRemove = id;
            clickedSeats.splice($.inArray(id, clickedSeats),1);
            console.log(clickedSeats);
        } else {
        clickedSeats.push(id);
        console.log(clickedSeats);
    };
    $('#seatList').text(clickedSeats);

    });

    $('#reserveButton').on('click', function(){
        clickedSeats.forEach(function(i){
            var idTemp = '#' + i;
            $(idTemp).removeClass('selectedSeat').addClass('reservedSeat');

        });
        clickedSeats=[];
    })

    //Reset modal
    $('.modal').on('hidden.bs.modal', function(){
        $(this).find('form')[0].reset();
    });



});
