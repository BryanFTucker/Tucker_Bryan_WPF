/**
 * Created by bryantucker on 7/20/14.
 * Group 1 - Celsius to Fahrenheit converter
 */
var userTemp = prompt("What is the numerical value of the temperature?");

var tempScale = prompt("Which scale do you want to convert to? F or C?");

    //This ternary operator will calculate Fahrenheit if the user enters "F." If the user enters "C" it will do the other statement.
result = (tempScale === "F") ? (9/5 * userTemp) + 32 : 5/9 * (userTemp - 32);

    //This "if - else" chooses which alert to display based on user input.
if (tempScale === "F"){
    alert("The temperature is " + result + "\xB0 Fahrenheit.")
}else{
    alert("The temperature is " + result + "\xB0 Celsius.")
}