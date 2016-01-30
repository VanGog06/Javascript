/*
 Write a JavaScript function sortLetters(string, boolean) that gets as an input a string and a boolean. The function
 sorts all letters in the string in alphabetical order and returns the newly formed string. The sorting is ascending if
 the boolean is true otherwise the sorting is in descending order. Example:
 Note: The sorting is case-insensitive but the output should use the same casing as the input!
 Hint: You are allowed to use .sort() function.

 Input	                                    Output
 sortLetters('HelloWorld', true)	        'deHllloorW'
 sortLetters('HelloWorld', false)	        'WroolllHed'
 */

var element = document.getElementById("result");

function sortLetters(string, bool) {
    var array = string.split("");

    array = array.filter(function (element) {
        return /\S/.test(element);
    });

    if (bool === true) {
        array = array.sort(function(firstElement, secondElement) {
            return firstElement > secondElement
        });
    } else {
        array = array.sort(function(firstElement, secondElement) {
           return firstElement < secondElement;
        });
    }

    return array;
}

function showResult() {
    var inputString = document.getElementById('inputString').value;
    var inputBoolean = document.getElementById('order').value;

    var finalResult = sortLetters(inputString, inputBoolean);
    element.innerHTML = finalResult.join("");
}
