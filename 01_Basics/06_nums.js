const num = 40

console.log(typeof num);  // number
console.log(typeof toString(num));  // string



const balance = new Number(400)

console.log(typeof balance); // object

console.log(typeof toString(balance)) // string


console.log(balance.toString().length); // 3
console.log(num.toString().length);  // 2
console.log(balance.toFixed(2));  // 400.00


const bigVal = 100000
console.log(bigVal.toLocaleString('en-IN')); // 1,00,000



/**
 * MATHS
 */

console.log(Math);  // Object [Math] {}

console.log(Math.abs(-8.92));  // 8
console.log(Math.round(-8.92)); // -9
console.log(Math.ceil(-8.92));  // -8
console.log(Math.floor(-8.92));  // -9


console.log(Math.random())  // values from 0 to 1
console.log(Math.random()*6+1)  





