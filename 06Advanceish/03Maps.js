var myMap = new Map();

myMap.set(1, "Anand");
myMap.set(2, "Ankit");
myMap.set(3, "Abhishek");
myMap.set(4, "Akshay");
myMap.set(5, "Aman");

//console.log(myMap.get(4));
console.log(myMap);


// for (let key of myMap.keys()) {
//     console.log(`Key: ${key}`);
// }

// for (let value of myMap.values()) {
//     console.log(`value: ${value}`);
// }

for (let [key, value] of myMap) {
    console.log(`Key is: ${key} and value is ${value}`);
}

// myMap.forEach((key)=> console.log(`${key}`));

myMap.forEach((value, key)=> console.log(`${key} is ${value}`));

myMap.delete(1);
console.log(myMap);
