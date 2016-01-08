var element = document.getElementById("time");

function getTime() {
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if (hour >= 0 && hour < 10)
    {
        hour = "0" + hour;
    }

    if (minutes >= 0 && minutes < 10)
    {
        minutes = "0" + minutes;
    }

    if (seconds >= 0 && seconds < 10)
    {
        seconds = "0" + seconds;
    }

    element.innerHTML = hour + ":" + minutes + ":" + seconds;
}

setInterval(getTime, 1000);