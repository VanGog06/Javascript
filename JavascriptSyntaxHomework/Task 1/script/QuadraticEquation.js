/*
 Write a script that enters the coefficients a, b and c of a quadratic equation a*x2 + b*x + c = 0 and calculates and
 prints its real roots. Note that quadratic equations may have 0, 1 or 2 real roots. Example:

 Input      	Output
 2              X1 = -3
 5              X2 = 0.5
 -3

 2              X = 1
 -4
 2

 4              No real roots
 2
 1
 */

var element = document.getElementById("result");

var a = prompt("Please enter the coefficient for 'A'");
var b = prompt("Please enter the coefficient for 'B'");
var c = prompt("Please enter the coefficient for 'C'");

var x1 = 0;
var x2 = 0;

var d = (b * b) - (4 * a * c);

if (d > 0)
{
    x1 = (-b - Math.sqrt(d)) / (2 * a);
    x2 = (-b + Math.sqrt(d)) / (2 * a);

    element.innerHTML = "x1 = " + x1 + "<br />x2 = " + x2;
}
else if (d === 0)
{
    x1 = x2 = -b / (2 * a);

    element.innerHTML = "x = " + x1;
}
else
{
    element.innerHTML = "No real roots";
}