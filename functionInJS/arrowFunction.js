//1. one parameter, and a single return statement
const square = (x) => x*x;

//2. multiple parameter and single return statement
const sunOfTwoNo = (x,y) => x+y;

//3.multiple ststement in function expresion
const sum = (x,y) =>{
    console.log('Addition ${x} and ${y}');
    return x + y;
};

//4. return an object 
const sumAndDifference = (x,y) => ({sum: x+y, difference: x-y});


//calling a function 

let op1 = square(5);
console.log(op1);

let op2 = sunOfTwoNo(5,2);
console.log(op2);

let op3 = sum(1,2);
console.log(op3);

let op4 = sumAndDifference(5,2);
console.log(op4);
