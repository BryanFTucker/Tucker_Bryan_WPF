/**
 * Created by bryantucker on 7/20/14.
 * Group 1 - Celsius to Fahrenheit converter
 */
var userTemp = prompt("What is the numerical value of the temperature?");

var tempScale = prompt("Which scale do you want to convert to? F or C?");

result = (tempScale === "F") ? (9/5 * (userTemp + 32)) : (5/9 * (userTemp - 32));

console.log(result);