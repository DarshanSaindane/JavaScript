function add(x,y){
    return x+y;
}

console.log(add(10,20));

// function havind default parameter

function multi(x,y=1){   //function multi(x=2,y) if we do this then it give us error
    return x*y;
}
console.log(multi(5)); // this can assigne the value from left to right

// having no argument

function addition(x=5,y=7){
    return x+y;
}
console.log(addition());
