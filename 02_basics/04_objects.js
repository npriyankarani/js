//const tinderUser = new Object()//creating an empty object using the Object constructor

const tinderUser = {}//creating an empty object using the object literal syntax

tinderUser.id = "123abc"
tinderUser.name = "Hitesh"
tinderUser.isLoggedIn = false

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

//const obj1={1:"a",2:"b"}
//const obj2={3:"c",4:"d"}
//const obj3={obj1,obj2}
//console.log(obj3)//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } } 

//const obj3=Object.assign({},obj1,obj2)
//console.log(obj3)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//const obj3={...obj1,...obj2}
//console.log(obj3)  //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//Arrayy of objects
const users=[
        {
            id:1,
            email:"user1@example.com"
        },
        {

        },
        {

        },
]
//console.log(users[0].id)
console.log(tinderUser)
console.log(Object.keys(tinderUser))//[ 'id', 'name', 'isLoggedIn' ]
 console.log(Object.values(tinderUser))//[ '123abc', 'Hitesh', false ]
 console.log(Object.entries(tinderUser))//[ [ 'id', '123abc' ], [ 'name', 'Hitesh' ], [ 'isLoggedIn', false ] ]

 console.log(tinderUser.hasOwnProperty("name"))//true

 const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"

 }
 //course.courseInstructor
const {courseInstructor:Instructor}=course
//console.log(courseInstructor)

console.log(Instructor)
//json format
//{
    //"name:"Hitesh",
    //"coursename":"js in hindi"
    //"price":"free"

//}

[
    {},
    {},
]

