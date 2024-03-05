// dates

let myDate = new Date()

// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())

//let myCreatedDate = new Date(2023, 0 , 23)
//let myCreatedDate = new Date(2023, 0 , 23, 5,3)
let myCreatedDate = new Date("2023-02-23")

// console.log(myCreatedDate.toLocaleDateString())

let myTimestamp = Date.now()

// console.log(myTimestamp)
// console.log(myCreatedDate.getTime())

let newDate = new Date()

console.log(newDate.toDateString())
console.log(newDate.getDay())
console.log(newDate.getMonth()+1)

newDate.toLocaleString('default',{    // customise the display format of locale date string
    weekday:"long",
})


