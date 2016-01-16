var element = document.getElementById("showResult");

var people = [
    new Person("Scott", "Guthrie", 38),
    new Person("Scott", "Johns", 36),
    new Person("Scott", "Hanselman", 39),
    new Person("Jesse", "Liberty", 57),
    new Person("Jon", "Skeet", 38)
];

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.toString = function() {
        return this.firstName + " " + this.lastName + "(age " + this.age + ")";
    }
}

function groupBy(criteria) {
    var criteriaKeys = [];

    for(var index = 0; index < people.length; index++) {
        if (criteriaKeys.indexOf(people[index][criteria]) === -1) {
            criteriaKeys.push(people[index][criteria]);
        }
    }

    for(var i = 0; i < criteriaKeys.length; i++) {
        var result = "Group " + criteriaKeys[i];
        var output = [];

        for (var index in people) {
            if (people[index][criteria] === criteriaKeys[i]) {
                output.push(people[index].toString());
            }
        }

        element.innerHTML += result + "[" + output.join(", ") + "]<br />";
    }
}

function showResult() {
    element.innerHTML = "";
    var value = document.getElementById("criteria").value;
    groupBy(value);
}


