// primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference (non primitive)
// arrays, objects, functions

const heroes = ["a","aa", "aaa"]

let myObj = {
    name: 'yash',
    age: 22,
}

const myFunction = function(){
    console.log("heeelo")
}

//console.log(typeof myFunction);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack and Heap memory

// primitives gets stored in stack and non primitives gets stored ih heap

// in stack memory we get a copy of defined variable and in heap we get reference to the declared variable

let myName = "yashvardhan"
let anotherName = myName
anotherName = "notYash"

console.log(myName)
console.log(anotherName)
// this indicates that a copy is given for primitive datatypes

let userOne = {
    id:"kkaa",
    upi:"llaa@kka"
}

let userTwo = userOne;
userTwo.email = "changed@kkaa"

console.log(userOne.email);
console.log(userTwo.email);




