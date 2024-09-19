const accountId = 2
let email = "amartya.kumar@lnmiit.ac.in"
var password = "amartya"
myCity = "Varanasi"
let accountState



//accountId = 4   // typeerror: Assignment to constant variable.

/*
Prefer not to use var because of
issues in functional scope or block scope
*/

email = "amar.22@g.com"
password = "helloJi"
myCity = "Jaipur"

console.table([accountId,email,password,myCity,accountState]);

/*

┌─────────┬─────────────────┐
│ (index) │ Values          │
├─────────┼─────────────────┤
│ 0       │ 2               │
│ 1       │ 'amar.22@g.com' │
│ 2       │ 'helloJi'       │
│ 3       │ 'Jaipur'        │
│ 4       │ undefined       │
└─────────┴─────────────────┘

*/