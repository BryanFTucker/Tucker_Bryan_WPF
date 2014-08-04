/**
 * Created by bryantucker on 8/3/14.
 * UPS Package Insurance
 */
//get input from user and assign that input to a variable
var insurance = prompt("Does your package need additional insurance?");

    //test for user input. while the insurance does not equal a string and equals an empty string than the user is re-prompted
    while (insurance != "yes" && insurance === ""){
        insurance = prompt("Please enter yes or no.");
    }
    //if user input does not equal yes (equals no) than a message will display
    if (insurance != "yes"){
        console.log("Since you don't need additional insurance, have a nice day.");
    }

//get inout from user and assign that input to a variable
var insuranceAmount = prompt("How much insurance do you need?");

    //while the variable does not equal a number or is an empty string or is less than or equal to zero then the user is re-prompted
    while ((isNaN(insuranceAmount) || insuranceAmount === "") || insuranceAmount <= 0){
        insuranceAmount = prompt("Please enter a number greater than zero.");
    }

//This is a self-executing anonymous function. I learned about it in a blog post from Noah Stokes [http://esbueno.noahstokes.com/post/77292606977/self-executing-anonymous-functions-or-how-to-write] The way i understand it is that the function has no name and is there fore anonymous. The object of the function is inside the curly brackets and the last set of "();" tell the function to run whatever is inside.
(function(){
    var calcAmount = (insuranceAmount/100) * 2;
    console.log("Your additional insurance will add $" + calcAmount + " to the shipping cost.")
})();

