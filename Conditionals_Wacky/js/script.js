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


var shipSpeed = prompt("How fast do you want to go?", "warp 1, warp 2, or warp 3");

if (shipSpeed === ""){
    prompt("Please enter a velocity", "warp 1, warp 2, warp 3");
}


