function sayMyName(){
    console.log("H")
    console.log("I")
    console.log("T")
    console.log("E")
    console.log("S")
    console.log("h")

}
sayMyName()

function addTwoNumbers(){
    let a=10,b=5;
    let sum;
    sum=a+b;
    console.log(sum)
}
addTwoNumbers()

function loginUserMessage(username)
{
    return `${username} just logged in`
}
console.log(loginUserMessage("Priyanka"))

function calculateCartPrice(...num1)//rest operator
{
    return num1//output in array
}

console.log(calculateCartPrice(200,400,500,2000))

function calculate(val1,val2,...num2)
{
    return num2
}

console.log(calculate(100,200,300,400))

const user={
    username:"hitesh",
    prices:199
}
function handleObject(anyobject)
{
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)//op:hitesh,199

handleObject({
    username:"sam",
    price:399
})

const myNewArray=[200,400,100,600]
function returnSecondValue(getArray)
{
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));//400
console.log(returnSecondValue([100,200,300,400]))//200
 


 


