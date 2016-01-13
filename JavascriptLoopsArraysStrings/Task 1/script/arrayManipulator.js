/*
 You are given an array of objects. Your task is to write a JavaScript code that filters out the numbers of that array
 (removes all non-number objects). Then you should: 1. Find the Min number, 2. Find the Max number, 3.
 Find the most frequent number. Finally you should print out the numbers you have found and the filtered array sorted
 in descending order. Example:

 Input	                                        Output
 ["Pesho", 2, "Gosho", 12, 2,                   Min number: 0
  "true", 9, undefined, 0, "Penka",             Max number: 12
   { bunniesCount : 10}, [10, 20, 30, 40]]	    Most frequent number: 2
                                                [12, 9, 2, 2, 0]
 */

var mostFrequentNumber = 0;
var maxFrequency = 0;
var frequency = 0;

var array = ["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", { bunniesCount : 10}, [10, 20, 30, 40]];

var filteredArray = array.filter(function(item){
    return !isNaN(item);
});

var sortedArray = filteredArray.sort(function(firstNumber, secondNumber) {
    return firstNumber < secondNumber;
});

for (var index = 0; index < sortedArray.length; index++) {
    if (sortedArray[index] === sortedArray[index + 1]) {
        frequency++;
    } else {
        frequency = 0;
    }

    if (frequency > maxFrequency)
    {
        maxFrequency = frequency;
        mostFrequentNumber = sortedArray[index];
    }
}

document.getElementById("min").innerHTML = sortedArray[sortedArray.length - 1] + "<br />";
document.getElementById("max").innerHTML = sortedArray[0] + "<br />";
document.getElementById("mostFrequent").innerHTML = mostFrequentNumber + "<br />";
document.getElementById("printArray").innerHTML = "[" + sortedArray.join(" ,") + "]";