//singleton
// Object.create

//object literal
const mySym=Symbol("key1")//symbol is a unique identifier and it is not enumerable
const JsUser = {
    name : "Hitesh",
    "full name" : "Hitesh Choudhary",
    age : 30,
    email :"hitesh@lco.dev",
    friends : ["Rohit","Suresh","Mahesh"],
    isLoggedIn : true,
    lastLoginDays : ["Monday","Friday"],
    [mySym] : "mykey1"
}


//console.log(JsUser.email)
//console.log(JsUser["email"])//correct way to access the property using bracket notation
//console.log(JsUser["full name"])

//JsUser.email = "priya@gmail.com"
//Object.freeze(JsUser)//freeze the object to prevent any changes to the object

//JsUser.email = "Sunita@gmail.com"//this will not change the email property because the object is frozen
//console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello ${this.name} welcome to JS`);//this keyword refers to the current object 

}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

