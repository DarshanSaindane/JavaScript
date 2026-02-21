class Product{
    //properties -> variable -> datamember
    name;
    price;
    rating;

    //behaviours -> function -> member function
    dispaly(){
        console.log("dispalying the current product")
    }
}

const p = new Product() //new -> creates an empty plain object
// in above piece of code we are calling the constructor method
console.log(p)
p.dispaly()