/*
 Implement the classical Tic-Tac-Toe game in JavaScript. Players play one after another. Use HTML to display the play
 field and JavaScript to implement the game logic.
 */

var canvas = document.getElementById("tictactoe");
var context = canvas.getContext("2d");

var startX = 0,
    startY = 0,
    endX = 0,
    endY = 0;

var rectOne = false,
    rectTwo = false,
    rectThree = false,
    rectFour = false,
    rectFive = false,
    rectSix = false,
    rectSeven = false,
    rectEight = false,
    rectNine = false;

var filledElements = [];
var isCircle = false,
    isWinner = false;

var counter = 0;

//Line size
context.lineWidth = 5;

//Draw all lines
function drawLines() {
    context.strokeStyle = "black";

    context.beginPath();
    context.moveTo(70, 0);
    context.lineTo(70, 210);
    context.stroke();

    context.moveTo(140, 0);
    context.lineTo(140, 210);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(0, 70);
    context.lineTo(210, 70);
    context.stroke();

    context.moveTo(0, 140);
    context.lineTo(210, 140);
    context.stroke();
    context.closePath();
}

drawLines();

//draw X sign
function drawX(startX, startY, endX, endY) {
    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(endX, endY);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(startX + 50, startY);
    context.lineTo(startX, startY + 50);
    context.stroke();
    context.closePath();
}

//draw circle
function drawCircle(startX, startY) {
    context.beginPath();
    context.arc(startX + 25, startY + 25, 27, 0, 2 * Math.PI);
    context.stroke();
    context.closePath();
}

//get mouse click coordinates
function getXY(event) {
    var x = event.clientX;
    var y = event.clientY;

    checkXY(x, y);

    //determine where to draw
    if (x >= 0 && x <= 69) {
        if (y >= 0 && y <= 69) {
            if (rectOne === false) {
                checkShape();
                rectOne = true;
                fillFilledElements(0);
            }
        }
        else if (y >= 71 && y <= 139) {
            if (rectTwo === false) {
                checkShape();
                rectTwo = true;
                fillFilledElements(1);
            }
        }
        else if (y >= 141 && y <= 209){
            if (rectThree === false) {
                checkShape();
                rectThree = true;
                fillFilledElements(2);
            }
        }
    }

    if (x >= 71 && x <= 139) {
        if (y >= 0 && y <= 69) {
            if (rectFour === false) {
                checkShape();
                rectFour = true;
                fillFilledElements(3);
            }
        }
        else if (y >= 71 && y <= 139) {
            if (rectFive === false) {
                checkShape();
                rectFive = true;
                fillFilledElements(4);
            }
        }
        else if (y >= 141 && y <= 209){
            if (rectSix === false) {
                checkShape();
                rectSix = true;
                fillFilledElements(5);
            }
        }
    }

    if (x >= 141 && x <= 210) {
        if (y >= 0 && y <= 69) {
            if (rectSeven === false) {
                checkShape();
                rectSeven = true;
                fillFilledElements(6);
            }
        }
        else if (y >= 71 && y <= 139) {
            if (rectEight === false) {
                checkShape();
                rectEight = true;
                fillFilledElements(7);
            }
        }
        else if (y >= 141 && y <= 209) {
            if (rectNine === false) {
                checkShape();
                rectNine = true;
                fillFilledElements(8);
            }
        }
    }

    checkWinner();
}

//check which shape to draw
function checkShape() {
    if (counter % 2 === 0) {
        drawX(startX, startY, endX, endY);
        isCircle = false;
    }
    else {
        drawCircle(startX, startY);
        isCircle = true;
    }
}

//set coordinates for shape
function checkXY(x, y) {
    //check first column
    if (x >= 0 && x <= 69) {
        if ((y >= 0 && y <= 69) && rectOne === false) {
            startX = 10;
            startY = 10;
            endX = 60;
            endY = 60;
            count();
        }
        else if ((y >= 71 && y <= 139) && rectTwo === false) {
            startX = 10;
            startY = 80;
            endX = 60;
            endY = 130;
            count();
        }
        else if ((y >= 141 && y <= 209) && rectThree === false){
            startX = 10;
            startY = 150;
            endX = 60;
            endY = 200;
            count();
        }
    }

    //check second column
    if (x >= 71 && x <= 139) {
        if ((y >= 0 && y <= 69) && rectFour === false) {
            startX = 80;
            startY = 10;
            endX = 130;
            endY = 60;
            count();
        }
        else if ((y >= 71 && y <= 139) && rectFive === false) {
            startX = 80;
            startY = 80;
            endX = 130;
            endY = 130;
            count();
        }
        else if ((y >= 141 && y <= 209) && rectSix === false){
            startX = 80;
            startY = 150;
            endX = 130;
            endY = 200;
            count();
        }
    }

    //check third column
    if (x >= 141 && x <= 210) {
        if ((y >= 0 && y <= 69) && rectSeven === false) {
            startX = 150;
            startY = 10;
            endX = 200;
            endY = 60;
            count();
        }
        else if ((y >= 71 && y <= 139) && rectEight === false) {
            startX = 150;
            startY = 80;
            endX = 200;
            endY = 130;
            count();
        }
        else if ((y >= 141 && y <= 209) && rectNine === false){
            startX = 150;
            startY = 150;
            endX = 200;
            endY = 200;
            count();
        }
    }
}

//counter
var count = (function () {
    return function () {return counter += 1;}
})();

//mark filled elements in an array
function fillFilledElements(index) {
    if (isCircle)
    {
        filledElements[index] = "C";
    }
    else
    {
        filledElements[index] = "X";
    }
}

// check if its circle
function checkIsCircle(index)
{
    isCircle = filledElements[index] === "C";
}

//check if there is a winner
function checkWinner()
{
    var x1 = y1 = x2 = y2 = x3 = y3 = 0;

    if ((filledElements[0] === "C" &&
        filledElements[1] === "C" &&
        filledElements[2] === "C") ||
        (filledElements[0] === "X" &&
        filledElements[1] === "X" &&
        filledElements[2] === "X"))
    {
        checkIsCircle(0);
        isWinner = true;
        x1 = 10;
        y1 = 10;
        x2 = 10;
        y2 = 80;
        x3 = 10;
        y3 = 150;
    } else if ((filledElements[3] === "C" &&
        filledElements[4] === "C" &&
        filledElements[5] === "C") ||
        (filledElements[3] === "X" &&
        filledElements[4] === "X" &&
        filledElements[5] === "X"))
    {
        checkIsCircle(3);
        isWinner = true;
        x1 = 80;
        y1 = 10;
        x2 = 80;
        y2 = 80;
        x3 = 80;
        y3 = 150;
    } else if ((filledElements[6] === "C" &&
        filledElements[7] === "C" &&
        filledElements[8] === "C") ||
        (filledElements[6] === "X" &&
        filledElements[7] === "X" &&
        filledElements[8] === "X"))
    {
        checkIsCircle(8);
        isWinner = true;
        x1 = 150;
        y1 = 10;
        x2 = 150;
        y2 = 80;
        x3 = 150;
        y3 = 150
    } else if ((filledElements[0] === "C" &&
        filledElements[3] === "C" &&
        filledElements[6] === "C") ||
        (filledElements[0] === "X" &&
        filledElements[3] === "X" &&
        filledElements[6] === "X"))
    {
        checkIsCircle(0);
        isWinner = true;
        x1 = 10;
        y1 = 10;
        x2 = 80;
        y2 = 10;
        x3 = 150;
        y3 = 10;
    } else if ((filledElements[1] === "C" &&
        filledElements[4] === "C" &&
        filledElements[7] === "C") ||
        (filledElements[1] === "X" &&
        filledElements[4] === "X" &&
        filledElements[7] === "X"))
    {
        checkIsCircle(1);
        isWinner = true;
        x1 = 10;
        y1 = 80;
        x2 = 80;
        y2 = 80;
        x3 = 150;
        y3 = 80;
    } else if ((filledElements[2] === "C" &&
        filledElements[5] === "C" &&
        filledElements[8] === "C") ||
        (filledElements[2] === "X" &&
        filledElements[5] === "X" &&
        filledElements[8] === "X"))
    {
        checkIsCircle(2);
        isWinner = true;
        x1 = 10;
        y1 = 150;
        x2 = 80;
        y2 = 150;
        x3 = 150;
        y3 = 150;
    } else if ((filledElements[0] === "C" &&
               filledElements[4] === "C" &&
               filledElements[8] === "C") ||
               (filledElements[0] === "X" &&
               filledElements[4] === "X" &&
               filledElements[8] === "X"))
    {
        checkIsCircle(0);
        isWinner = true;
        x1 = 10;
        y1 = 10;
        x2 = 80;
        y2 = 80;
        x3 = 150;
        y3 = 150;
    } else if ((filledElements[2] === "C" &&
        filledElements[4] === "C" &&
        filledElements[6] === "C") ||
        (filledElements[2] === "X" &&
        filledElements[4] === "X" &&
        filledElements[6] === "X")) {
        checkIsCircle(2);
        isWinner = true;
        x1 = 10;
        y1 = 150;
        x2 = 80;
        y2 = 80;
        x3 = 150;
        y3 = 10;
    }
    else
    {
        draw(filledElements);
    }

    //draw winning shapes
    if (isCircle && isWinner)
    {
        context.strokeStyle = "green";
        drawCircle(x1, y1);
        drawCircle(x2, y2);
        drawCircle(x3, y3);

        alert("Circle wins!");
        refreshPage();
    }
    else if (!isCircle && isWinner)
    {
        context.strokeStyle = "green";
        drawX(x1, y1, x1 + 50, y1 + 50);
        drawX(x2, y2, x2 + 50, y2 + 50);
        drawX(x3, y3, x3 + 50, y3 + 50);

        alert("X wins!");
        refreshPage();
    }
}

//disable canvas
function disableCanvas() {
    document.getElementById("disablingDiv").style.display = "block";
}

//check if the game ended as draw
function draw(array)
{
    var count = 0;
    for (var i in array) {
        if (array[i] !== "") {
            count++;
        }
    }

    if (count === 9)
    {
        alert("Draw");
        refreshPage();
    }
}

//refresh the page
function refreshPage()
{
    alert("The page will reload in 2 seconds!");

    setTimeout(function() {
        window.location.reload(1);
    }, 2000);

    disableCanvas();
}