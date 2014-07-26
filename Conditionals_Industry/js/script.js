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
//Ask the customer if there package needs to shipped in a box.
var myBox = prompt("Does your package need to shipped in a box?");

//Test for user input
if (myBox === "") {
    prompt("Please enter yes or no");
}

fraGile === "yes" && myBox === "yes" ? console.log("You need packing peanuts.") : console.log("Your package will be okay.");

