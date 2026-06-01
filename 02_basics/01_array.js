// array

const myArray = [0, 1, 2, 3, 4, 5]
console.log(myArray)
console.log(typeof myArray)

const myArray1 = new Array(0,1,2,3,4,5)
console.log(myArray1)
console.log(myArray1[1])

// Array Methods
console.log(myArray1.push(6))//add element at the end of array
console.log(myArray1)
console.log(myArray1.pop())//remove element from the end of array
console.log(myArray1)

console.log(myArray.unshift(0)) //add element to the beginning of the array
console.log(myArray)

console.log(myArray.shift())//remove element from the beginning of the array
console.log(myArray)

console.log(myArray.includes(9))//check if element is present in the array or not
console.log(myArray.indexOf(9))

const newArr=myArray.join()
console.log(myArray)
console.log(newArr)
console.log(typeof newArr)

//Slice and Splice
const myArray2=[0,1,2,3,4,5]
console.log(myArray2.slice(2))//returns new array from the given index to the end of the array
console.log(myArray2.slice(2,4))//returns new array from the given start index to the end index-1

console.log(myArray2.splice(2))//removes elements from the given index to the end of the array and returns the removed elements as a new array
console.log(myArray2)


