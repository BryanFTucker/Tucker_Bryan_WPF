/**
 * Created by bryantucker on 7/17/14.
 * Expressions_Industry
 */
var width = prompt("What is the width of you image?");

var height = prompt("What is the height of your image?");

var dpi = prompt("What is the image dpi?");

pxWidth = width * dpi;

pxHeight = height * dpi;

alert ("The image is " + pxWidth + "px by " + pxHeight + "px.");