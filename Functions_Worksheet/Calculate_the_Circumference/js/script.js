/**
 * Created by bryantucker on 7/30/14.
 * Calculate the Circumference
 */
var radius = prompt("What is the radius of the circle?");

while (isNaN(radius) || radius === ""){
    radius = prompt("Please enter a number for the radius.");
}
