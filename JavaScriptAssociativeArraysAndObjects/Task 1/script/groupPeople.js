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
                                    Group Johns : [Scott Johns(age 36),]
                                    Group Hanselman : [Scott Hanselman(age 39)]
                                    Group Skeet : [Jon Skeet(age 38)]
                                    Group Liberty : [Jesse Liberty(age 57)]
 */

var neededKeys = [],
    neededValues = [],
    element = document.getElementById("showResult"),
    objectValues = [],
    result = [],
    criteriaValue = "",
    isWrong = false;

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
}

function groupBy(criteria) {
    if (criteria === "firstName") {
        neededKeys = getKeysFirstname(people);
        neededValues = getValuesFirstname(people);
    } else if (criteria === "lastName") {
        neededKeys = getKeysLastname(people);
        neededValues = getValuesLastname(people);
    } else if (criteria === "age"){
        neededKeys = getKeysAge(people);
        neededValues = getValuesAge(people);
    } else {
        isWrong = true;
    }

    result = "";

    if (!isWrong) {
        for (var i = 0; i < neededKeys.length; i++) {
            result += "<span class = 'blue'>Group " + neededKeys[i] + "</span> : <span class = 'green'>[" + neededValues[i] + "]</span>";
            result += "<br >";
        }
    } else {
        result = "Wrong criteria!";
        isWrong = false;
    }

    return result;
}

function getObjectValues(object, criteria) {
    var values = [];
    if (criteria === "firstName") {
        for(var index in object) {
            values[index] = object[index].firstName;
        }
    } else if (criteria === "lastName") {
        for(var index in object) {
            values[index] = object[index].lastName;
        }
    } else {
        for(var index in object) {
            values[index] = object[index].age;
        }
    }
    values.sort();

    return values;
}

function getKeysFirstname(object) {
    var keys = [];
    objectValues = getObjectValues(object, "firstName");

    for(var index = 0; index < objectValues.length; index++) {
        if (index === objectValues.length - 1) {
            keys.push(objectValues[index]);
        } else if (objectValues[index] !== objectValues[index + 1]) {
            keys.push(objectValues[index]);
        }
    }

    return keys;
}

function getValuesFirstname(object) {
    var keys = getKeysFirstname(object);
    var values = [];

    for (var i = 0; i < object.length; i++) {
        for (var j = 0; j < keys.length; j++) {
            if (object[i].firstName === keys[j]) {
                if (values[j] === undefined) {
                    values[j] = object[i].firstName + " " + object[i].lastName + "(age " + object[i].age + ")";
                } else {
                    values[j] += ", " + object[i].firstName + " " + object[i].lastName + "(age " + object[i].age + ")";
                }
            }
        }
    }

    return values;
}

function getKeysLastname(object) {
    var keys = [];
    objectValues = getObjectValues(object, "lastName");

    for(var index = 0; index < objectValues.length; index++) {
        if (index === objectValues.length - 1) {
            keys.push(objectValues[index]);
        } else if (objectValues[index] !== objectValues[index + 1]) {
            keys.push(objectValues[index]);
        }
    }

    return keys;
}

function getValuesLastname(object) {
    var keys = getKeysLastname(object);
    var values = [];

    for (var i = 0; i < object.length; i++) {
        for (var j = 0; j < keys.length; j++) {
            if (object[i].lastName === keys[j]) {
                if (values[j] === undefined) {
                    values[j] = object[i].firstName + " " + object[i].lastName + "(age " + object[i].age + ")";
                } else {
                    values[j] += ", " + object[i].firstName + " " + object[i].lastName + "(age " + object[i].age + ")";
                }
            }
        }
    }

    return values;
}

function getKeysAge(object) {
    var keys = [];
    objectValues = getObjectValues(object, "age");

    for(var index = 0; index < objectValues.length; index++) {
        if (index === objectValues.length - 1) {
            keys.push(objectValues[index]);
        } else if (objectValues[index] !== objectValues[index + 1]) {
            keys.push(objectValues[index]);
        }
    }

    return keys;
}

function getValuesAge(object) {
    var keys = getKeysAge(people);
    var values = [];

    for (var i = 0; i < object.length; i++) {
        for (var j = 0; j < keys.length; j++) {
            if (object[i].age === keys[j]) {
                if (values[j] === undefined) {
                    values[j] = object[i].firstName + " " + object[i].lastName + "(age " + object[i].age + ")";
                } else {
                    values[j] += ", " + object[i].firstName + " " + object[i].lastName + "(age " + object[i].age + ")";
                }
            }
        }
    }

    return values;
}

function showResult() {
    criteriaValue = document.getElementById("criteria").value;
    element.innerHTML = groupBy(criteriaValue);
}

