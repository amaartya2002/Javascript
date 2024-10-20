// arrays

const arr = [1,2,'amartya',22]
console.log(arr);

const myArr = new Array(1,2,3,4)
console.log(typeof myArr); // object


// arrays methods

arr.push(7);
arr.push('shaktiman')
let poppedEle = arr.pop()  
console.log(poppedEle);  //  shaktiman
console.log(typeof poppedEle);  // string


/**
 * Unshift = adds value at first of an array.
   Shift = removes first value of an array.
   Includes = checks true or false.
   IndexOf = checks the position of value in number form.
   Join = converts to string.
 */

let myJoin = [2,5,66,7,7];
 
console.log(myJoin.join()); // 2,5,66,7,7 => String
console.log(myJoin); // [ 2, 5, 66, 7, 7 ]




