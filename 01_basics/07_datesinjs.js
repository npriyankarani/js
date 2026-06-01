//Dates

let myDate = new Date()
console.log(myDate)
console.log(typeof myDate)
console.log(myDate.toString())
console.log(myDate.toLocaleDateString())

let myCreatedate=new Date(2023,0,23)
console.log(myCreatedate.toDateString())

let myCreatedDate1=new Date(2023,0,23,5,3)
console.log(myCreatedDate1.toLocaleString())

let myCreatedDate2=new Date("2023-01-23T05:03:00")
console.log(myCreatedDate2.toLocaleString())

let myTimestamp=Date.now()
console.log(myTimestamp)
console.log(Date.now()/1000)
console.log(Math.floor(Date.now()/1000))


let newDate=new Date()
console.log(newDate.getMonth())
console.log(newDate.getDay())

newDate.toLocaleString('default',{
    weekday:'long',
})

