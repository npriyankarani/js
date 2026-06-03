const user={
    username:"priyanka",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }

}
//user.welcomeMessage()//priyanka,welcome to website
//user.username="sam"
//user.welcomeMessage()//sam,welcome to website

//console.log(this)//op:{} but it perfectly works in google browser console

//function chai()
//{

  //  console.log(this)
//}

// function chai(){
//     let username="Priyanka"
//     console.log(this.username);

// }
// chai()

const chai=function ()
{
    let username="Hitesh"
    console.log(this.username)
}
chai()//undefined

/////***************Arrow function**********/
// const chai=()=>
// {
//     let username="hitesh"
//     console.log(this);

// }

// const addTwoNumbers = (num1,num2)=>
// {
//     return num1+num2
// }
// console.log(addTwoNumbers(3,4))//7

const addTwo= (num1,num2) => num1 + num2 //Implicit mostly used in react
console.log(addTwo(3,4))//7

const add = (num1, num2) => ({ username: "Priyanka" });

console.log(add(3, 4)); // Output: { username: 'Priyanka' }





