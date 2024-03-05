const name= "yashV"
const val = 7
//console.log(name+val+" value");

console.log(`hello my name is ${name} and my value is ${val}`)     //String interpolation...we make place holders using dollar sign and put our variables on this

const gameName = new String("yashV77");

//console.log(gameName[0])
//console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString =  gameName.substring(0,3);
console.log(newString);

const anotherString = gameName.slice(-7, 4);
console.log(anotherString)

const newStringOne = "   yash   "
console.log(newStringOne)
console.log(newStringOne.trim());

const url = "https://yash.com/yash%20vardhan"
console.log(url.replace('%20','-'));

console.log(url.includes('yash'))
console.log(url.includes('void'))

// split function ke baare me padh lo