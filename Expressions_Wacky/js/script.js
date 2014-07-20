/**
 * Created by bryantucker on 7/18/14.
 * Expressions_Wacky
 */
var num1 = prompt("Enter a number between 1 and 1000.");

var num2 = prompt("Please enter another number between 1 and 1000.");

var num3 = prompt("One more number please.");

var numList = [num1, num2, num3];

var result = Math.max(numList[0], numList[1], numList[2]);