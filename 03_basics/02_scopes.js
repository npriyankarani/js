 let a=100
    const b=20
    var c=30
if (true)
{
    let a=10
    const b=20
    var c=30
    console.log("inner",a);
}

console.log("outer:",a);
console.log(b);
console.log(c);

function one(){
    const username="priya"

    function two()
    {
        const website="utube"
        console.log(username);
    }
    //console.log(website);
    two()//not executed
}
one()

if(true)
{
    const username="priya"
    if(username==="priya")
    {
        const website="utube"
        console.log(username + website);
    }
    //console.log(website)//error cant be accessed
}
//console.log(username)//error cant be accessed

//*****INTERESTING*****
console.log(addone(5))//6
function addone(num)
{
    return num+1
}

addtwo(5)//error
const addtwo=function(num2)
{
    return num2+1
}



 