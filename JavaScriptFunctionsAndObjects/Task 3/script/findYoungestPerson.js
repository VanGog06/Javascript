/*
 Write a JavaScript function findYoungestPerson(array) that accepts as parameter an array of people, finds the youngest
 person that has a smartphone and returns his full name. Write a JS program youngestPerson.js to execute your function
 for the below examples and print the result at the console.

 Predefined array:
 var people = [
 { firstname : 'George', lastname: 'Kolev', age: 32, hasSmartphone: false },
 { firstname : 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true },
 { firstname : 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true },
 { firstname : 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false }]

 Input	                                Output
 findYoungestPerson(people);	        The youngest person is Vasil Kovachev

 */

var people = [
    { firstname : 'George', lastname: 'Kolev', age: 32, hasSmartphone: false },
    { firstname : 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true },
    { firstname : 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true },
    { firstname : 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false }];

function findYoungestPerson(array) {
    array = array.filter(function(element) {
        return element.hasSmartphone;
    });

    array = array.sort(function(firstElement, secondElement) {
       return firstElement.age > secondElement.age;
    });

    document.getElementById("showResult").innerHTML = 'The youngest person is ' + array[0].firstname + " " + array[0].lastname;
}

findYoungestPerson(people);

