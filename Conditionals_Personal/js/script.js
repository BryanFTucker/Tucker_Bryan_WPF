/**
 * Created by bryantucker on 7/23/14.
 * Assignment: Conditionals
 * Conditionals_Personal
 */
//Ask the user what time of day it is. Morning, afternoon, or evening.
var timeOfDay = prompt("What time of day is it? \nMorning, Afternoon, or Evening?");

//Test if Variable is blank
if (timeOfDay === "") {

    //Kindly tells the user to enter one of three specific words
    timeOfDay = prompt("Please enter morning, afternoon, or evening.")
}

//Ask the user if the dogs have food.
var foodForDogs = prompt("Do the dogs have food?");

//Test if variable is blank
if (foodForDogs === ""){

    //ask the user to enter a correct value
    foodForDogs = prompt("Please enter Yes or No.");
}

//If it is morning then the dogs need food. Also, removed case sensitivity from user input.
if (timeOfDay.toLowerCase() == "morning"){

    //displays to the console
    console.log("It's time to feed the dogs.");

//If the dogs do not have food, then they need food. Also, removed case sensitivity from user input.
}else if (foodForDogs.toLowerCase() == "no"){

    //displays to the console
    console.log("It's time to feed the dogs.");

//If the dogs have food and the time of day is afternoon or evening, then they do not need food. Displays to the console.
}else{
    console.log("The dogs don't need food.");
}

