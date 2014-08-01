/**
 * Created by bryantucker on 7/31/14.
 * Functions_Personal
 * Driving Cost Calculator
 */

var distance = prompt("How many miles are you driving?");

    while (distance === "" || isNaN(distance)){
        distance = prompt("Please enter a number?");
    }
var milePerGallon = prompt("What is the average MPG for your vehicle?");

    while (milePerGallon === "" || isNaN(milePerGallon)){
        milePerGallon = prompt("Please enter a number?");
    }

var gasCost = prompt("How much does gas cost in your area?");

    while (gasCost === "" || isNaN(gasCost)){
        gasCost = prompt("Please enter a number?");
    }

var total = calcCost(distance, milePerGallon, gasCost);

function calcCost(A, B, C){

    var drivingCost = (A / B) * C;

    return drivingCost:
}