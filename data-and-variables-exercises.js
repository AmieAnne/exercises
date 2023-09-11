// Declare and assign the variables below
const kilometersToMars = 225000000;
const milesPerKilometer = 0.621;
const shuttleSpeedMph = 17500;
const shuttleName = "Determination";
const kilometersToMoon = 384400;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log (typeof(kilometersToMars));
console.log (typeof(milesPerKilometer));
console.log (typeof(shuttleSpeedMph));
console.log (typeof(shuttleName));
console.log (typeof(kilometersToMoon))
// Calculate a space mission below
let milesToMars = kilometersToMars * milesPerKilometer;
let hoursToMars = milesToMars / shuttleSpeedMph;
let daysToMars = hoursToMars / 24;
// Print the results of the space mission calculations below
console.log (shuttleName +" will take "+daysToMars +" days to reach Mars.");
// Calculate a trip to the moon below
let milesToMoon = kilometersToMoon * milesPerKilometer;
let hoursToMoon = milesToMoon / shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;
console.log (shuttleName +" will take "+daysToMoon +" days to reach Moon.");
// Print the results of the trip to the moon below
const input = require('readline-sync');

let info = input.question("Please enter your age: ");
//The user enters 25.

console.log(typeof info);