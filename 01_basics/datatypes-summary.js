// Primitive

// 7types :String,Number,Booolean,null,underfined,symbol,BigInt

//Reference (Non primitive) : Array,objects,Functions

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId) //false

const heros=["Shaktiman","naagraj","doga"];

let myobj=
{
    name:"priyanka",
    age:24,
}

const myFunction=function()
{
    console.log("hello world");
}