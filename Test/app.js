/*
console.log ("Hello from Node.js!")
console.log ("My name is Hachem")
console.log ("I am learning backend!")
*/

const os = require('os');

console.log ("========================================================================= My System Information");
console.log ("Platform : " , os.platform());
console.log ("Hostname : " , os.hostname());
console.log ("Free Memory : " , Math.round(os.freemem() / 1024 / 1024) , "MB");
console.log ("Total Memory : " , Math.round(os.totalmem() / 1024 / 1024) , "MB");
console.log ("CPU : " , os.cpus()[0].model);
console.log ("===============================================================================================");

const math = require('./math');
console.log ("=============================================================================== Math Operations");
console.log ("Addition : " , math.add(5, 3));
console.log ("Subtraction : " , math.substract(5, 3));
console.log ("Multiplication : " , math.multiply(5, 3));
console.log ("Division : " , math.divide(5, 3));
console.log ("===============================================================================================");
