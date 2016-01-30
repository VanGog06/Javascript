/*
 Write a JavaScript function removeItem(value) that accept as parameter a number or string. The function should remove all elements with the given value from an array. Attach the function to the Array type. You may need to read about prototypes in JavaScript and how to attach methods to object types. You should return as a result the modified array. Write a sample program to demonstrate that your function works correctly for the examples below:
 Input	                                                                Output
 var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];                 [2, 4, 3, 4, 111, 3, 2, '1']
 arr.removeItem(1);

 var arr = ['hi', 'bye', 'hello' ];                                     ['hi', 'hello']
 arr.removeItem('bye');
 */

Array.prototype.removeItem = function(value) {
    return this.filter(function(element) {
       return element !== value;
    });
};

var input = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
console.log(input.removeItem(1));

var input2 = ['hi', 'bye', 'hello' ];
console.log(input2.removeItem("bye"))