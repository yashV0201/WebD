// ARRAYS

const myArr = [2,4,7,1,9,6]

//myArr.push(6)
//myArr.pop()

// shift and unshift

//myArr.unshift(0)
//myArr.shift();

// console.log(myArr.includes(9))

// const newArr = myArr.join()

// console.log(myArr)
// console.log(newArr)


// psuh and pop

// slice and splice
console.log("A ", myArr)
const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("B ", myArr)

const myn2 = myArr.splice(1,3)
console.log("C ", myArr)
console.log(myn2)

// slice does not manipulates the original array whereas splice does manioulates original array
