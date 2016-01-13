/*
 Write a JavaScript function calcSupply(age, maxAge, food, foodPerDay) that accepts the following parameters:
 your age (years), your maximum age (years), your favorite food name (e.g. "chocolate"), estimate amount of your favorite
 food per day (a number). The function calculates how many of the food you will eat for the rest of your life.
 Write JS program lifetimeSupplyCalc.js that calculates the amount of a few foods that you will eat. The result should
 be printed on the console. Run the program through Node.js. Note: we assume that there are no leap years. Examples:

 Input	            Output
 38                 14600kg of chocolate would be enough until I am 118 years old.
 118
 chocolate
 0.5

 20                 48910kg of fruits would be enough until I am 87 years old.
 87
 fruits
 2

 16                 34529kg of nuts would be enough until I am 102 years old.
 102
 nuts
 1.1
 */

var prevLifetimeFood = 0;

function showResult() {
    var age = document.getElementById("age").value;
    var maxAge = document.getElementById("maxAge").value;
    var food = document.getElementById("food").value;
    var foodPerDay = document.getElementById("foodPerDay").value;

    var lifetimeFood = calcSupply(age, maxAge, food, foodPerDay);

    if (lifetimeFood !== prevLifetimeFood)
    {
        document.getElementById("result").innerHTML += lifetimeFood + "kg of " + food +
                                                       " would be enough until I am " + maxAge + " years old.<br />";
    }

    prevLifetimeFood = lifetimeFood;
}

function calcSupply(age, maxAge, food, foodPerDay)
{
    return ((maxAge - age) * 365) * foodPerDay;
}
