/**
 * Created by bryantucker on 7/17/14.
 * Expressions_Industry
 * This JavaScript will calculate Dimensional weight. Dimensional weight is used by UPS to determine how much the customer is billed. I work at The UPS Store and I use this equation on a daily basis.
 */
var length = prompt("What is the length of you package in inches?");

var width = prompt("What is the width of your package in inches?");

var height = prompt("What is the height of you package in inches?");

const denominator = 166;

result = (length * width * height)/denominator;

alert("The Dimensional Weight of your package is " +result+ " lbs.");

