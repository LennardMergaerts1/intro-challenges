function myFirstFunction(bike) {
    forward(bike);
}

function twiceForward(bike) {
    forward(bike);
    forward(bike);
}

function thriceForward(bike) {
    forward(bike);
    forward(bike);
    forward(bike);
}

function forward4(bike) {
    let i = 4;
    
    while (i > 0) {
        forward(bike);
        i = i - 1;
    }
}

function forward5(bike) {
    let i = 5;
    
    while (i > 0) {
        forward(bike);
        i = i - 1;
    }
}

function forward10(bike) {
    let i = 10;
    
    while (i > 0) {
        forward(bike);
        i = i - 1;
    }
}

function right(bike) {
    turnRight(bike);
    forward(bike);
}

function ellShape(bike){
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    turnRight(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
}

function uTurn(bike){
    forward(bike);
    forward(bike);
    forward(bike);
    turnRight(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    turnRight(bike);
    forward(bike);
    forward(bike);
}

function crookedUTurn(bike){
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    turnRight(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    forward(bike);
    turnRight(bike);
    forward(bike);
    forward(bike);
    forward(bike);
}

function forwardUntilWall(bike){
    while (!sensor(bike)) {
        forward(bike);
    }
}

function smartEllShape(bike){
    while (!sensor(bike)) {
        forward(bike);
    }
    turnRight(bike);
    while (!sensor(bike)) {
        forward(bike);
    }
}

function spiral(car) {
    let i = 18;
    
    while (i > 0) {
        while (!sensor(car)) {
            forward(car);
        }
        turnRight(car);
        i = i - 1;
    }
    
}
function turnLeft(car){
    turnRight(car);
    turnRight(car);
    turnRight(car);
}

function left(car){
    turnLeft(car);
    forward(car);
}
function slalom(car){
    forwardUntilWall(car);
    turnLeft(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
    turnLeft(car);
    forwardUntilWall(car);
    turnLeft(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
}
function sensorRight(car) {
    turnRight(car);
    let result = sensor(car);
    turnLeft(car);
    
    return result;
}
function firstRight(car) {
   
}
function leftOrRight(car) {
    turnLeft(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
    turnRight(car);
    forwardUntilWall(car);
    turnLeft(car);
    forwardUntilWall(car);
}
function sensorRight(car) {
    turnRight(car);
    let result = sensor(car);
    turnLeft(car);

    return result;
}

function firstRight(car) {
    while (sensorRight(car)) {
        forward(car);
    }

    turnRight(car);
    forwardUntilWall(car);
}
function sensorLeft(car) {
    turnLeft(car);
    let result = sensor(car);
    turnRight(car);

    return result;
}

function firstLeft(car) {
    while (sensorLeft(car)) {
        forward(car);
    }

    turnLeft(car);
    forwardUntilWall(car);
}