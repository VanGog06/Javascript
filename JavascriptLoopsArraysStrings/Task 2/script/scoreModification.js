/*
 You are given an array of numbers. Your tasks are to first filter out all valid exam scores (between 0 and 400)
 and afterwards scale them downwards by removing 20% out of each score. Finally you should print out the changed scores
 sorted in ascending order. Example:
 Input	                                                    Output
 [200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1]	    [ 18.4, 53.6, 96, 136, 160, 169.6, 280 ]
 */

var input = [200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1];

var filteredInput = input.filter(function(item) {
   return (item >= 0 && item <= 400);
});

var mappedInput = filteredInput.map(function(item) {
   return item - (item  / 5);
});

var sortedInput = mappedInput.sort(function(firstScore, secondScore) {
   return firstScore > secondScore;
});

document.getElementById("showArray").innerHTML = sortedInput.join(", ");
