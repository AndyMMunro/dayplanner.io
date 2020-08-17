// 1  display date and current time
//     - incopreate an date and time api

// 2  then create entery blocks with save buttons
//     - needs to be based on 24hrs
//         - build calandar inside of HTML
//             - delet event button added when input is placed into field

// 5  color out past and present

// 3  store in put data in browser

// 4  display data from the browser save session

// 5  

// ?current Date and time display
$(document).ready(function () {

    // var currentDay = document.getElementById("currentDay");

    var currentDay = $("#current-day");

    var dateTime = moment().format('MMMM Do YYYY, h:mm:ss a');

    $(currentDay).text(dateTime)

    var rowArr = $(".time-block");
    // console.log(rowArr);


    var currentHour = moment().format('HH');

    rowArr.each(function () {
        // console.log(this.innerText)
        console.log($(this).data("hour"))
        var thisHour = parseInt($(this).data("hour"));

        if (thisHour == currentHour) {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present")

            console.log("this row is present " + $(this).data("hour"))
        } else if (thisHour < currentHour) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past")
            console.log("this row is past " + $(this).data("hour"))
        } else if (thisHour > currentHour) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future")
            console.log("this row is future " + $(this).data("hour"))
        }

    });

    $(".saveBtn").on("click", function () {
        // get nearby values
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // save in localStorage
        localStorage.setItem(time, value);
    });


    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));



    // for (var time = 6; time <= 18; time++) {

    //     let index = time - 6;

    //     let timeField = document.getElementsByClassName("time-field")

    //     let timeDisplay = time;

    //     timeField[index].innerHTML = timeDisplay;

    //     console.log(timeField);

    // }





    // Time col 
    // 1 place time or moment into time col
    // 2 compare time element with the current time



});



