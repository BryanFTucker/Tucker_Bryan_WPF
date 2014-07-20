/**
 * Created by bryantucker on 7/20/14.
 * ch3_examp2, pg61
 */
var myAge = Number(prompt("Enter your age",30));

if(myAge >= 0 && myAge <= 10)
{
    console.log("myAge is between 0 and 10");
}

if(!(myAge >= 0 && myAge <= 10))
{
    console.log("myAge is NOT between 0 and 10");
}

if(myAge >= 80 || myAge <= 10)
{
    console.log("myAge is 80 or above OR 10 or below");
}

if ((myAge >= 30 && myAge <= 39) || (myAge >= 80 && myAge <= 89))
{
    console.log("myAge is between 30 and 39 or myAge is between 80 and 89");
}