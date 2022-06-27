// var num1 = 7;
// var num2 = 6;

// console.log(num1 * num2);

// var answer = num1 > num2;

// console.log(answer);

// D = (L - S)/L * 100

// a + b * c /d * e


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition
var sellingprice = 199;
var listingprice = 799;

var discountPercent =( (listingprice - sellingprice) / listingprice) * 100;
console.log("Discount percentage is :" +discountPercent);

displayDiscountPercentage = Math.round(discountPercent);
console.log(displayDiscountPercentage + "%off")

var result = listingprice > sellingprice;
console.log(typeof result); //boolean

