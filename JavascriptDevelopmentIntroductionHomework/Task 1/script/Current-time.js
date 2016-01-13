/*
 Write a JavaScript program current-time.js that prints on the console the current time in UTC format.
 Execute your file through Node.js. A sample output is given below:

 Input	            Output
 (no input)	        Mon, 09 Mar 2015 12:25:12 GMT
 */

var date = new Date();
document.getElementById("time").innerHTML = date.toUTCString();
