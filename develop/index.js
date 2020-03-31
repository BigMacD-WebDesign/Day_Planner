// var storage = JSON.parse(localStorage.getItem("dayplanner")) || []; 
$(document).ready(function () {

    //Date and Time
    let currentDateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(currentDateTime);

    //Columns
    $(".save").on("click", function () {
        var dateTime = $(this).attr("date-time");
        var value = $(`#${dateTime}`).val();
        var dTime = {
            time:dateTime,
            data:value,
        };
        localStorage.setItem(dateTime,value);

        console.log(`value:${value} time:${dateTime}`);
    });


    console.log(localStorage.getItem("9"));
    $("#9").val(localStorage.getItem("9"));
    $("#10").val(localStorage.getItem("10"));
    $("#11").val(localStorage.getItem("11"));
    $("#12").val(localStorage.getItem("12"));
    $("#13").val(localStorage.getItem("13"));
    $("#14").val(localStorage.getItem("14"));
    $("#15").val(localStorage.getItem("15"));
    $("#16").val(localStorage.getItem("16"));
    $("#17").val(localStorage.getItem("17"));
    

    var currentTime = moment().hours()
    $(".input").each(function () {
        var blockTime = parseInt($(this).attr("id"))
        if (blockTime < currentTime) {
            $(this).addClass("past");
            $(`btn-#{blockTime}`)  
        }
        else if (blockTime === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        };
    });
});