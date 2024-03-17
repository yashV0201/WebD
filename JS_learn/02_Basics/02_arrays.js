const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman","flash","batman"]

//marvel_heroes.push(dc_heros)

// console.log(marvel_heroes)

// const all_heros = marvel_heroes.concat(dc_heros);

// console.log(all_heros)

//spread operator

const allHeros = [...marvel_heroes, ...dc_heros]
// console.log(allHeros)

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[8,9]]]
const another_array = anotherArray.flat(Infinity)
console.log(another_array)

console.log(Array.isArray("Yash"))
console.log(Array.from("Yash"))