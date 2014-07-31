/**
 * Created by bryantucker on 7/30/14.
 * Calculate the Circumference
 */
var radius = prompt("What is the radius of the circle?");

while (isNaN(radius) || radius === ""){
    radius = prompt("Please enter a number for the radius.");
}

const pi = 3.14;

function circleLenght(r){

    var formula = pi * (Math.pow(r,2));

    return formula;
}

var results = circleLenght(radius);

console.log("The circumference is " + results);
