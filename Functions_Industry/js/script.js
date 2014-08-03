/**
 * Created by bryantucker on 8/3/14.
 * UPS Package Insurance
 */

var insurance = prompt("Does your package need additional insurance?");

    while (insurance != "yes" && insurance === ""){
        insurance = prompt("Please enter yes or no.");
    }

    if (insurance != "yes"){
        console.log("Since you don't need additional insurance, have a nice day.");
    }

var insuranceAmount = prompt("How much insurance do you need?");

    while ((isNaN(insuranceAmount) || insuranceAmount === "") || insuranceAmount <= 0){
        insuranceAmount = prompt("Please enter a number greater than zero.");
    }