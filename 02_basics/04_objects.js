//const tinderUser = new Object()//creating an empty object using the Object constructor

//const tinderUser = {}//creating an empty object using the object literal syntax

//tinderUser.id = "123abc"
//tinderUser.name = "Hitesh"
//tinderUser.isLoggedIn = false

//console.log(tinderUser);


const regularUser = {
    email :"abc@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Priyanka",
            Lastname:"Sharma"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname)//Priyanka

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
//const obj3={obj1,obj2}
//console.log(obj3)//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } } 
console.log(...obj1,...obj2) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }   
