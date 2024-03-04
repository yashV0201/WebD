// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 == 1);
// console.log(2 != 1);
// console.log(2 < 1);

// console.log("2" >1)
// console.log("02" >1)


// comparison and equality checks are different things
// also these type of comparisons must be avoided
console.log(null > 0);  // comparison converts datatypes
console.log(null == 0);  // equality chcks dont convert
console.log(null >= 0);

console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0);

console.log("2"==2)
console.log("2"===2)     // strict checks....also checks if same data type is being compared