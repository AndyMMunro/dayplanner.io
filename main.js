// 1  display date and current time
//     - incopreate an date and time api

// 2  then create entery blocks with save buttons
//     - needds to be based on 24hrs
//         - build calandar inside of HTML
//             - delet event button added when input is placed into field

// 5  color out past and present

// 3  store in put data in browser

// 4  display data from the browser save session

// 5  

// ?current Date and time diplay
window.onload = function () {

    var currentDay = document.getElementById("currentDay");

    var dateTime = moment().format('MMMM Do YYYY, h:mm:ss a');

    currentDay.innerHTML = dateTime;

    console.log(currentDay);

    var timeFieldDisplay = document.getElementsByClassName("time-field");

    var time = moment().format("H")

    timeFieldDisplay.innerHTML = time;

    console.log(timeFieldDisplay);
}

