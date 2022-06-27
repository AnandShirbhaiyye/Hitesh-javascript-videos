// for(let i = 0; i < 10; i++){
//    console.log(i);
// }

const myStates = ["Rajasthan", "Delhi", "Assam", 1947, "Tamil Nadu", "Maharashtra"];

// for(let i=0; i< myStates.length; i++){
//     //  console.log(i);
//     console.log(myStates[i]);
// }

// for(let i=0; i< myStates.length; i++){
//    if(typeof myStates[i] !== 'string') continue;
//     console.log(myStates[i]);
// }
//o/p = string values

// for(let i=0; i< myStates.length; i++){
//     if(typeof myStates[i] === 'string') continue;
//      console.log(myStates[i]);
//  }
// o/p = 1947

for(let i=0; i< myStates.length; i++){
    if(typeof myStates[i] !== 'string') break;
     console.log(myStates[i]);
 }