/**
 * Created by bryantucker on 7/27/14.
 * Conditionals_Wacky
 * Spaceballs Speed Test
 */
//input variable from user
var lightSpeed = prompt("Shall we prepare the ship for light speed?");

//test variable for proper input
if (lightSpeed === ""){
    //ask the user to enter yes or no
    prompt("Please enter yes or no");
//If the user does not want to go to light speed then a message will display in the console
}else if (lightSpeed === "no"){
    //displays message in the browser console
    console.log("It's going to take us a while to get there.");
}
//input second variable from user
var shipSpeed = prompt("How fast do you want to go?", "1, 2, 3");

//test user input. input cannot be equal to zero or greater than three.
if (shipSpeed == 0 || shipSpeed > 3){
    //asks user to input a correct value and assigns user input to test variable after test is completed
    var shipSpeed = prompt("Please enter a velocity", "1, 2, 3");
}

//if user picks a velocity of 1 this message will display
if (shipSpeed === "1" || shipSpeed === 1){
    console.log("You're going faster than the speed of light!");
//if user picks a velocity of 2 this message will display
}else if(shipSpeed === "2" || shipSpeed === 2){
    console.log("You're going twice the speed of light. That's Ridiculous speed!");
//if user picks a velocity of 3 this message will display
}else if (shipSpeed === "3" || shipSpeed === 3){
    console.log("That's Ludicrous speed! You've gone into plaid!");
//if user enters anything else then a final message will display
}else{
   console.log("Maybe you should install some secret hyper jets!");
}

