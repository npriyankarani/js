const name="priyanka"
const repoCount=50

//console.log(name + repoCount + " value")
 //priyanka50
 console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);

 const gameName=new String("chess");
 console.log(typeof gameName) //object

 console.log(gameName[0])
 console.log(gameName.__proto__)
 console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf("ess"))   

const newString=gameName.substring(2,3)
console.log(newString)

const anotherString=gameName.slice(2,3)
console.log(anotherString)

const newString2=gameName.substring(-3,2)
console.log(newString2)

const anotherString2=gameName.slice(-3,2)
console.log(anotherString2)

const paddedString="       Priyanka       "
console.log(paddedString)
console.log(paddedString.trim())/// removes spaces
 
const url="http://priyanka%200.com"
console.log(url.replace("%200","--"))

const abc="Priya priyanka"
console.log(abc.split(" "))
