function cylinderVolume(array)
{
    return Math.PI * array[0] * array[0] * array[1];
}

var prevResult = 0;

function showResult() {
    var radius = document.getElementById("radius").value;
    var height = document.getElementById("height").value;
    var array = [radius, height];

    var result = Math.round(cylinderVolume(array) * 1000) / 1000

    if (result !== prevResult)
    {
        document.getElementById("result").innerHTML += result + "<br />";
    }

    prevResult = result
}
