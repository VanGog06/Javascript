/*
 Write a JavaScript function calcCylinderVol(arr) that accepts the following parameters: radius and the height of a
 straight circular cylinder. The function calculates the volume of the cylinder. Write JS program cylinderVol.js that
 calculates the volume of a few cylinders. The result should be printed on the console. Run the program through Node.js.
 Examples:

 Input	        Output
 [2, 4]	        50.265
 [5, 8]	        628.319
 [12, 3]	    1357.168
 */

function cylinderVolume(array) {
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
