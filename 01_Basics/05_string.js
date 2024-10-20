const name = 'Amartya'
const repoCount = 8;

console.log(`My name is ${name} and my repscount is ${repoCount}`);


const val = new String('amartya-kumar')

console.log(typeof val); // object
console.log(val); // [String: 'amartya']
console.log(val[0]);  // a
console.log(val.length);  // 7
console.log(val.charAt(2));  // a 
console.log(val.toUpperCase()); //AMARTYA 
console.log(val.indexOf('r'));   // 3

console.log(val.slice(0,4));  // amar => can take -ve values too
console.log(val.substring(0,4)); // amar


const naam = 'Amartya     '

console.log(naam.trim());

const url = 'https://amartya.com/amartya%20kumar'

console.log(url.replace('%20','-'));

console.log(url.includes('amartya')); // true





