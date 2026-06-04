//Reduce
//using fun
const myNums=[1,2,3]
const myTotal=myNums.reduce(function(acc,currval){
    console.log(`acc:${acc} and currval:${currval}`);
    return acc+currval
},  0)//Accumulator value started from 0
console.log(myTotal);

//using arrow function
const myTot=myNums.reduce((accumulator,currentval)=>{
    console.log(`acc:${accumulator} and currval:${currentval}`);
    return accumulator+currentval
},0)
console.log(myTot);

const Mytot=myNums.reduce((accum,cur)=>accum+cur,0)
console.log(Mytot);

const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"python course",
        price:999
    },
    {
        itemName:"data science course",
        price:12999
    },
    {
        itemName:"mobile dev course",
        price:5999
    } 
]

const priceToPay=shoppingCart.reduce((acum,item)=>acum+item.price,0)
console.log(priceToPay);