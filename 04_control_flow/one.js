//falsy values
//false,0,-0,BigInt 0n,"",null,undefined,NaN


//truthy values
//"0",'false'," ",[],{},function(){} 
const userEmail=[]
if(userEmail.length===0)
{
    console.log("Array is Empty");
}

const emptyObj={}
if(Object.keys(emptyObj).length ===0)
{
    console.log("Object is empty")
}

//Nullish Colaescing Operator (??): null undefined

let val1;
val1=5 ?? 10
console.log(val1);

let val2;
val2=null ?? 10
console.log(val2);

let val3;
val3=undefined ?? 15 
console.log(val3);

