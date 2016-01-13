/*
 Write a JavaScript function calcCircleArea(r) that takes as a parameter the radius of a rectangle and calculates and returns its area.
 Put the function in a file named circle-area.js. Write a HTML page circle-area.html that includes the script circle-area.js
 and calculates and prints in the page body the area of circles of size r=7, r=1.5 and r=20. Examples:

 Input	        Output
 7	            153.93804002589985
 1.5	        7.0685834705770345
 20	            1256.6370614359173
 */

function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
}

var elements = document.getElementsByTagName('span');
elements[0].innerHTML = calculateCircleArea(7);
elements[1].innerHTML = calculateCircleArea(1.5);
elements[2].innerHTML = calculateCircleArea(20);
