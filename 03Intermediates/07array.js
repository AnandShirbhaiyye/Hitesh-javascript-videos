var countries = ["India", "USA", "Japan", "Russia"];

var states = new Array("Rajasthan", "Delhi", "Mumbai", "Assam");

// console.log(states[1]);

// console.log(states.length); // there are four elements but starting from 0
states[0] = "Punjab";
//console.log(states);// replace rajasthan to punjab

var user = ["Hitesh", "hitesh@gmail.com", 3, 34, true];
//console.log(user);

user.pop(); //true is remove
user.pop(); // 34 is remove
//console.log(user);
user.unshift("NEW VALUE");
//console.log(user);
user.shift();
console.log(user);

console.log(user.indexOf(3));

console.log(Array.from("hitesh"));