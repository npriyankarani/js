const arr = [1,2,3,4,5]
//forof
//for(iterator of object)
for(const num of arr)
{
    console.log(num);
}

const greetings="Hello world"
for(const greet of greetings)
{
    console.log(`Each char is ${greet}`)
} 

//maps
const map=new Map()
map.set('IN','India')
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")//duplicate values not allowed

console.log(map)

for(const key of map)
{
    console.log(key)
}

for(const [key,value] of map)
{
    console.log(key,':-',value)
}
//OBJECTS AARE NOT ITERABLE