/**
 * Created by bryantucker on 7/22/14.
 * Group 3: Multiple Conditions, Tire Pressure
 */
//Pressure for each tire in PSI. Order as shown: FL, FR, RL, RR.
var tirePressure = [30, 30, 32, 32];

if (tirePressure[0] === tirePressure[1] && tirePressure[2] === tirePressure[3]){
    alert("The Tires pass spec!");
}else{
    alert("Get your tires checked out!");
}

