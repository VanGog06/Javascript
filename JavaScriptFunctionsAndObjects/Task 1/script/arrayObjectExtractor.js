/*
 Write a JavaScript function extractObjects(array). As a function argument you are given an array of different objects
 with different data types . Your task is to write the JavaScript function that filters out the Objects (all primitive
 data type objects and arrays are filtered) and returns a new array with the extracted elements. Example:
 Note: Try to write the filter algorithm yourself and not use .filter() function. (Hint: Use procedural for loop)

 Input	                                                    Output
 [                                                          [
     "Pesho",                                                    { name: 'Valyo', age: 16 },
     4,                                                          { type: 'fish', model: 'zlatna ribka' },
     4.21,                                                       { name: 'Penka', height: 1.65 }
     { name : 'Valyo', age : 16 },                          ]
     { type : 'fish', model : 'zlatna ribka' },
     [1,2,3],
     "Gosho",
     { name : 'Penka', height: 1.65}
 ]
 */

var input = [
    "Pesho",
    4,
    4.21,
    { name : 'Valyo', age : 16 },
    { type : 'fish', model : 'zlatna ribka' },
    [1,2,3],
    "Gosho",
    { name : 'Penka', height: 1.65}
];

function extractObjects(array) {
    return input.filter(function(element) {
       return (typeof element === 'object' && !Array.isArray(element) && element !== null);
    });
}

console.log(extractObjects(input));

