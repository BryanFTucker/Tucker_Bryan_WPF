/**
 * Created by bryantucker on 7/25/14.
 * Conditionals_Industry
 */
//Is the customer's item fragile?
var fraGile = prompt("Is you package fragile?");

//Test for user input
if (fraGile === "") {
    prompt("Please enter yes or no");
}

var myBox = prompt("Does your package need to shipped in a box?");

if (myBox === "") {
    prompt("Please enter yes or no");
}