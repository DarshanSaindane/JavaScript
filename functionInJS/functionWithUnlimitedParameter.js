function sumOfAllParameter(){
    let sum = 0;
    for(var i=0; i<arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

let result = sumOfAllParameter(5,6,2,7,2,8);
console.log(result);