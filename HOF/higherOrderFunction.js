const powerTwo = (n) => {
    return n**2
}

function powerCube(powerTwo, n){   //A function that returns a function or takes other functions as arguments is called a higher-order function.
    return powerTwo(n) * n
}

//console.log(powerCube(powerTwo,3))

//-----------------------------------------------------------------------------------------

function sayHello(){
    return () => {
        console.log("hello Darshan")
    }
}

let gussValue = sayHello(); //Even if your function was named, you can use the variable name to invoke it. Naming it will be helpful when debugging your code.

//console.log(gussValue())

//--------------------------------------------------------------------------------------


const higheOrder = n => {
    const oneFun = m => {
        const twoFun = p => {
            return n + m + p
        }
        return twoFun
    }
    return oneFun
}
console.log(higheOrder(2)(3)(4))

//use of above concept

const myNums = [2,3,5,4]
const sumArray = arr => {
    let total = 0
    arr.forEach(function(element){
        total = total + element
    });

    return total
}
//console.log(sumArray(myNums))

//---------------------------------------------------------------------------------------------

function oneMoreHello(){
    console.log("hello Darshan")
}

//setInterval(oneMoreHello,1000) //The setInterval() method of the WorkerGlobalScope interface repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
