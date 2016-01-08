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