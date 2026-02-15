let arr = [1,2,3,6,5,4,8,7,9,66,51]
console.log(arr)

//add element at end 
arr.push(69) 
console.log(arr);

//remove element fron end
arr.pop();
console.log(arr)

//remove from start
arr.shift()
console.log(arr);

//add at start
arr.unshift(5)
console.log(arr);

//we can return the element which we are removing
let a = arr.pop()
console.log(a);

//cancating two array 
let a1 = [1,2,3]
let a2 = [4,5,6]
let a3 = a1.concat(a2)
console.log(a3);

//we can convert array element into String
//Adds all the elements of an array into a string, separated by the specified separator string.
let s = a3.join("!");
console.log(s)

//reverseing array
arr.reverse();
console.log(arr);


//finding index of particular element
console.log(arr.indexOf(5));

//Returns a copy of a section of an array.
console.log(arr.slice(0,5));




