/**
 * Created by bryantucker on 7/27/14.
 * Conditionals_Wacky
 * Spaceballs Speed Test
 */
var lightSpeed = prompt("Shall we prepare the ship for light speed?");

if (lightSpeed === ""){
    prompt("Please enter yes or no");
}else if (lightSpeed === "no"){
    console.log("It's going to take us a while to get there.");
}

var shipSpeed = prompt("How fast do you want to go?", "1, 2, 3");

if (shipSpeed === "" || (shipSpeed <= 0 && shipSpeed > 3)){
    prompt("Please enter a velocity", "1, 2, 3");
}


var v1 = 1

var v2 = 2

var v3 = 3



