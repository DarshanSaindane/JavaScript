//forEach function
let arr = [1,5,7,9]
arr.forEach(function(ele,index,arr){
   // console.log(ele,index,arr)
})

arr.forEach((ele,index,arr) => {
   // console.log("arrow: ",ele,index,arr)
})

const heros = ["akshay","SalamanBhai","rajkumar","swapnil","Nagaraj"]
heros.forEach((ele) => {
   // console.log(ele.toUpperCase())
})

//---------------------------------------------------------------------------------------

//------***map function*** (it is same as forEach)

arr.map(function(ele,index,arr) {
   // console.log(ele,index,arr)
})

console.log("")

arr.map((ele,index,arr) => {
    // console.log(ele,index,arr)
})

//------------------------------------------------------------------------------------------

//Filters
//the filter() function is used to create a new array that contains only those elements which satisfy a condition (return true).
//filter() goes through each element of an array and keeps only the elements that pass a test
//filter() does NOT change the original array , Always returns a new array,If no element matches → returns [], Condition must return true or false

//console.log(heros)
const herosWithRaj = heros.filter((h) => {
    return h.endsWith('raj')                // here return is important
})

//console.log(herosWithRaj)

//--------------------------------------------------------------------------------------------------

//Shopping Cart

const cartBill = [20,30,40]
const sumOfCartBill = cartBill.reduce((prev, curr) => prev+curr, 0)
//reduce is the callBack function      previous valalue , current value ie. first index value => operation to perform , gives previous value 
console.log(sumOfCartBill)

//-------------------------------------------------------------------------------------------------------------

//check if all value are numbers

gameScore = [200,100,150,80,40,60,50,250]

console.log(typeof gameScore[4]) // it is index
const gameScoreCheck = gameScore.every((v) => typeof v == 'number') //here we write number in '' becz typeof return ans in string form so 

console.log("check: " , gameScoreCheck)

//findIndx, sort
//The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
const array = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;
console.log(array.findIndex(isLargeNumber));

//some
//The some() method of Array instances returns true if it finds one element in the array that satisfies the provided testing function. Otherwise, it returns false.
const even = (element) => element % 2 === 0;
console.log(array.some(even));

//sort
//he default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code unit values.
console.log(array.sort())

const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);