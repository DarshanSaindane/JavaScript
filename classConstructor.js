class Product{
    //there is only one constructor in js
    constructor(n, p, r){
        console.log("calling the constructor")
        this.name = n
        this.price = p
        this.rating = r

        return 10 // if your returning primitive then it will be avoided in constructor
        //return {x: 0, y:20} //if your return non primitive it will be returned
        //constructor only retirn one object if you return self made object then this wala object will be inglected
        //if you are returning any object then it will return this wala object 
    }

    dispaly(){
        console.log("displaying the current product ", this.name, this.price, this.rating)
    }
}

const p = new Product('iphone', 100000, 4.5) 
//console.log(p)
// console.log(p.name)
 p.dispaly()