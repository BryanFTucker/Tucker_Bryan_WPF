/**
 * Created by bryantucker on 7/22/14.
 * Group 2 - Check the Login
 */
//The correct username is TheUPSStore. The correct password is password.
const userName = "TheUPSStore";
const passWord = "password";

var inputUserName = prompt("Please enter your username:");

var inputPassWord = prompt("Please enter your password:");

//This will display "Welcome, TheUPSStore!" if the username and password are correct. If the username is incorrect it will display the second alert. if the password is incorrect it will display the third alert.
if (inputUserName === userName && inputPassWord === passWord){
   result = alert("Welcome, " + userName + "!");
}else if (inputUserName != userName){
   result = alert("User not found. Try again.");
}else {
   result = alert("Password does match our records.");
}

alert(result);