/**
 * Created by bryantucker on 7/31/14.
 * Functions_Personal
 * Driving Cost Calculator
 */
//input from user
var distance = prompt("How many miles are you driving?");
    //initiate while loop to test user prompt for an empty string or if the input is not a number.
    while (distance === "" || isNaN(distance)){
        distance = prompt("Please enter a number?");
    }

//input from user
var milePerGallon = prompt("What is the average MPG for your vehicle?");
    //initiate while loop to test user prompt for an empty string or if the input is not a number.
    while (milePerGallon === "" || isNaN(milePerGallon)){
        milePerGallon = prompt("Please enter a number?");
    }

//input from user
var gasCost = prompt("How much does gas cost in your area?");
    //initiate while loop to test user prompt for an empty string or if the input is not a number.
    while (gasCost === "" || isNaN(gasCost)){
        gasCost = prompt("Please enter a number?");
    }

//assign parameters to function and tells the output of the function to be equal to the variable total.
var total = calcCost(distance, milePerGallon, gasCost);

//call the function and assign arguments
function calcCost(A, B, C){
    //calculation of function
    var drivingCost = (A / B) * C;
    //outputs the calculated value
    return drivingCost.toFixed(2);
}

//display the result of the calculation to the browser's console window
console.log("You will need to buy $" + total + " in gas.");