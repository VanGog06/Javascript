/*
 Write a JavaScript function groupBy('criteria') that groups an array of people by age, first or last name. Create a
 Person constructor to add every person in the person array. The groupBy('criteria') function must return an object,
 with keys – the groups (age, firstName and lastName) and values – arrays with people in this group. Print on the console
  every entry of the returned object. Use function overloading (i.e. just one function).
 You may need to find how to use constructors. Examples:

 Predefined array
 var people = [
     new Person("Scott", "Guthrie", 38),
     new Person("Scott", "Johns", 36),
     new Person("Scott", "Hanselman", 39),
     new Person("Jesse", "Liberty", 57),
     new Person("Jon", "Skeet", 38)
 ];

 Input                              Output
 groupBy('firstName');              Group Scott : [Scott Guthrie(age 38), Scott Johns(age 36), Scott Hanselman(age 39)]
                                    Group Jesse : [Jesse Liberty(age 57)]
                                    Group Jon : [Jon Skeet(age 38)]

 Input                              Output
 groupBy('age');                    Group 36 : [Scott Johns(age 36)]
                                    Group 38 : [Scott Guthrie(age 38), Jon Skeet(age 38)]
                                    Group 39 : [Scott Hanselman(age 39)]
                                    Group 57 : [Jesse Liberty(age 57)]

 Input                              Output
 groupBy('lastName');               Group Guthrie : [Scott Guthrie(age 38)]
                                    Group Johns : [Scott Johns(age 36)]
                                    Group Hanselman : [Scott Hanselman(age 39)]
                                    Group Skeet : [Jon Skeet(age 38)]
                                    Group Libery : [Jesse Johns(age 57)]
 */

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
        var result = "<span class = 'blue'>Group " + criteriaKeys[i] + "</span> : ";
        var output = [];

        for (var index in people) {
            if (people[index][criteria] === criteriaKeys[i]) {
                output.push(people[index].toString());
            }
        }

        element.innerHTML += result + "<span class = 'green'>[" + output.join(", ") + "]</span><br />";
    }
}

function showResult() {
    element.innerHTML = "";
    var value = document.getElementById("criteria").value;
    groupBy(value);
}


