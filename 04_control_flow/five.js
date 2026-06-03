const coding=["js","ruby","cpp","java","python"]

coding.forEach(function name(item){
    console.log(item);
})

coding.forEach((val)=>{
    console.log(val);
})

function printMe(i){
    console.log(i);
}
coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

const myCoding=[
    {
        languageName:"javaScript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java",
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]
myCoding.forEach((item)=>{
    console.log(item)
})

myCoding.forEach((item)=>{
    console.log(item.languageFileName);
})

