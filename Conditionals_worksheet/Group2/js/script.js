/**
 * Created by bryantucker on 7/22/14.
 * Group 2 - Check the Login
 */
//The correct username is TheUPSStore. The correct password is password.
const userName = "TheUPSStore"
const passWord = "password"

var inputUserName = prompt("Please enter your username:");

var inputPassWord = prompt("Please enter your password:");

if (inputUserName === userName && inputPassWord === passWord){
    alert("Welcome, " + userName + "!");
}else if (inputUserName != userName){
    alert("User not found. Try again.")
}