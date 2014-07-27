/**
 * Created by bryantucker on 7/25/14.
 * Conditionals_Industry
 *The Fragile Package
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

//If the customer is shipping with a fragile box then they need packing peanuts. If it is fragile and not shipping in a box then they need bubble wrap. If it is not fragile and in a box they need bubble wrap. If it is not fragile and not in a box it needs bubble wrap.
fraGile === "yes" && myBox === "yes" ? console.log("You need packing peanuts.") : console.log("Your need bubble wrap.");


