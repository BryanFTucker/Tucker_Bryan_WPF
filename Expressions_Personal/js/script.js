/**
 * Created by bryantucker on 7/17/14.
 * Expression_Personal
 */
prompt("We are going to calculate how much wood stain will be needed to cover a certain number of 2x4 boards. We will need the length, width, and height of the boards used.");

var l = prompt("length:");
var w = prompt("width:");
var h = prompt("height:");

var surfaceArea = 2 * (w*l + h*l + h*w);

var boardNum = prompt("How many boards of that dimension do you have?");

var areaSum  = boardNum * surfaceArea;

var result = areaSum/21600;

alert("You will need " + result + " quarts of wood stain.");



