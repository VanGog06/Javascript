/*
 You are given a JSON string containing an array of Students (Objects). Your task is to scale their scores upwards by
 increasing them with 10%. After that you should add a field that shows whether the student has passed or failed the
 exam (passed exam means 100 or more points at the exam). Finally you should filter out only the students that have
 passed the exam and print them out sorted alphabetically. Example:

 Input	                                                Output
 [                                                      [{"name":"Алекс","score":377.3,"hasPassed":true},
    {                                                    {"name":"Габриела","score":440,"hasPassed":true},
        'name' : 'Пешо',                                 {"name":"Лилия","score":319,"hasPassed":true},
        'score' : 91                                     {"name":"Пешо","score":100.1,"hasPassed":true}]
    },
    {
        'name' : 'Лилия',
        'score' : 290
    },
    {
        'name' : 'Алекс',
        'score' : 343
    },
    {
        'name' : 'Габриела',
        'score' : 400
    },
    {
        'name' : 'Жичка',
        'score' : 70
    }
 ]
 */

var element = document.getElementById("showResult");

var input = '{"students":[' +
    '{"name" : "Пешо", "score" : 91},' +
    '{"name" : "Лилия", "score" : 290},' +
    '{"name" : "Алекс", "score" : 343},' +
    '{"name" : "Габриела", "score" : 400},' +
    '{"name" : "Жичка", "score" : 70}]}';

var object = JSON.parse(input);

var modifiedScoreStudents = object.students.map(function(item) {
    item.score += (item.score / 10);
    return item;
});

var passedStudents = modifiedScoreStudents.map(function(item) {
   if (item.score >= 100) {
       item.hasPassed = true;
   }
    else {
       item.hasPassed = false;
   }
    return item;
});

var filteredStudents = passedStudents.filter(function(item) {
   return item.hasPassed == true;
});

var sortedStudents = filteredStudents.sort(function(a, b) {
   return (a.name > b.name);
});

var keys = Object.keys(sortedStudents[0]);

sortedStudents.forEach(function(item) {
    element.innerHTML += '"' + keys[0] + '"' + " : " + '"' + item.name + '"'
                         + ", " + '"' + keys[1] + '"' + " : " + item.score
                         + ", " + '"' + keys[2] + '"' + " : " + item.hasPassed + "<br/>";
})