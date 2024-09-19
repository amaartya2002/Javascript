let score = "22"

console.log(typeof score); // string
console.log(typeof(score)); // string

let valueInNumber = Number(score)

console.log(typeof valInNumber);  // number
console.log(typeof(valInNumber)); // number


let val = "22abc"

console.log(typeof val)  // string

let numberVal = Number(val)

console.log(typeof numberVal); // number

console.log(numberVal);  // NaN => Not a number



/*

string
string
undefined
undefined
string
number
NaN

*/



/**
 * Conversion to Number :
  
 * For value of null => conversion gives value 0
 * For undefined value => conversion gives NaN
 * For true value => conversion gives 1
  
 * For String to boolean :
     For "" string => Gives false
     For "abc" string => Gives true 
 */