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

if (shipSpeed == 0 || shipSpeed > 3){
    var shipSpeed = prompt("Please enter a velocity", "1, 2, 3");
}


if (shipSpeed === "1" || shipSpeed === 1){
    console.log("You're going faster than the speed of light!");
}else if(shipSpeed === "2" || shipSpeed === 2){
    console.log("You're going twice the speed of light. That's Ridiculous speed!");
}else if (shipSpeed === "3" || shipSpeed === 3){
    console.log("That's Ludicrous speed! You've gone into plaid!");
}else{
   console.log("Maybe you should install some secret hyper jets!");
}

