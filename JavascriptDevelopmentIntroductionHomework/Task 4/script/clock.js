/*
 Write a JavaScript function in a Web page clock.html that shows the current time in format hh:mm:ss. The time should
 update itself so that it works as a clock.
 */

var element = document.getElementById("time");

function getTime() {
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if (hour < 10)
    {
        hour = "0" + hour;
    }

    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    element.innerHTML = hour + ":" + minutes + ":" + seconds;
}

setInterval(getTime, 1000);