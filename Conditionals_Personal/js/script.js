/**
 * Created by bryantucker on 7/23/14.
 * Assignment: Conditionals
 * Conditionals_Personal
 */
//Ask the user what time of day it is. Morning, afternoon, or evening.
var timeOfDay = prompt("Is it morning, afternoon, or evening?");

//Ask the user if the dogs have food.
var foodForDogs = prompt("Do the dogs have food?");

//If it's morning or the dogs don't have food then they need to be be feed. If it any other time of day rather than morning, the dogs do not get feed, unless they don't have food.
if (timeOfDay === "morning"){
    console.log("It's time to feed the dogs.");
}else if (foodForDogs === "no"){
    console.log("It's time to feed the dogs.");
}else{
    console.log("The dogs don't need food.");
}

