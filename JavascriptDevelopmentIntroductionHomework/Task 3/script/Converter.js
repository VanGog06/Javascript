/*
 Write a JavaScript code in a Web page dec2hex.html that enters a positive integer number num and converts and converts
 it to a hexadecimal form. The input should be entered as JavaScript prompt window. The output should be shown as browser
 popup window (alert). Examples:

 Input	    Output
 254	    FE
 6779	    1A7B
 10941298	A6F372
 65535	    FFFF
*/

var number = prompt("Enter a number");

if (number != null || number != "")
{
    alert((+number).toString(16).toUpperCase());
    console.log(number);
}
