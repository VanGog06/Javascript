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
