const names = ["Youtube", "facebook", "Instagram", "Netflix","Amazon"]

// for(const n of names){
//     console.log(n);
// }
// o/p :
// Youtube
// facebook
// Instagram
// Netflix
// Amazon

const symbols = {
    yt: "Youtube",
    ig: "Instagram",
    fb: "Facebook",
    wa: "Whats app"
}

// for (const n in symbols){
//     console.log(n);
// }
//o/p : runs only kay
// yt
// ig
// fb
// wa

// for (const n in symbols){
//     console.log(symbols[n]);
// }
// o/p :
// Youtube
// Instagram
// Facebook
// Whats app

for (const n in symbols){
    console.log(`Key is: ${n} and value is: ${symbols[n]}`);
}
// o/p :
// Key is: yt and value is: Youtube
// Key is: ig and value is: Instagram
// Key is: fb and value is: Facebook
// Key is: wa and value is: Whats app
