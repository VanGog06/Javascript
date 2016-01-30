/*
 Write a JavaScript function countDivs(html) to count the number of all DIVs in given HTML fragment passed as string.
 Write a JS program countOfDivs.js that invokes your function and prints the output at the console. Examples:
 Input	                                                            Output
 <!DOCTYPE html>                                                    7
 <html>
 <head lang="en">
    <meta charset="UTF-8">
    <title>index</title>
    <script src="/yourScript.js" defer></script>
 </head>
 <body>
    <div id="outerDiv">
        <div
    class="first">
            <div><div>hello</div></div>
        </div>
        <div>hi<div></div></div>
        <div>I am a div</div>
    </div>
 </body>
 </html>
 */

var input = '<!DOCTYPE html><html> <head lang="en"><meta charset="UTF-8"><title>index</title>' +
    '<script src="/yourScript.js" defer></script></head><body><div id="outerDiv"><div class="first"><div><div>hello</div></div>' +
    '</div><div>hi<div></div></div><div>I am a div</div></div></body></html> ';

function countDivs(html) {
    var pattern = /<\s*div.*?>/g;
    var match = html.match(pattern);
    console.log(match.length);
}

countDivs(input);


