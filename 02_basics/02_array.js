const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","batman","flash"]

//marvel_heros.push(dc_heros)
//onsole.log(marvel_heros)
//console.log(marvel_heros.length)
//console.log(marvel_heros[3])
//console.log(marvel_heros[3][0])

//const allheros=marvel_heros.concat(dc_heros)
//console.log(allheros)

//const allnewheros=[...marvel_heros,...dc_heros]//split the array and add to new array
//console.log(allnewheros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)//flat method is used to flatten the array and Infinity is used to flatten the array to any level

console.log(real_another_array)// [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))//['H', 'i', 't', 'e', 's', 'h']
console.log(Array.from({name:"Hitesh"}))//[undefined]

let score1 = 100
let score2 =200
let score3 =300
console.log(Array.of(score1,score2,score3))//[100, 200, 300]

