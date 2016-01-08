function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
}

var elements = document.getElementsByTagName('span');
elements[0].innerHTML = calculateCircleArea(7);
elements[1].innerHTML = calculateCircleArea(1.5);
elements[2].innerHTML = calculateCircleArea(20);
