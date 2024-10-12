console.log("2" > 1); // strings are converted to numbers in comparisons
console.log("02" > 1);



// Any conversions of this sort should be avoided
console.log(null> 0);
console.log(null >= 0); // true cuz equality check and  comparison check work diffrently
console.log(null == 0);

console.log(undefined > 0);
console.log(undefined >= 0);
console.log(undefined == 0);

console.log("1" === 1) // triple equal checks datatypes as well