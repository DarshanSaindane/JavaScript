//method 1 of object creation (by object literal)
let obj = {id:101, name:"alex", salary:10000};
console.log(obj);

//method 2 ob object creation (by creating instance of object directly)
let emp = new Object();
emp.id = 102;
emp.name = "Darshan";
emp.salary = 1000000;
console.log(emp);

//method 3 of object creation (by using object constractor)
function Emp(i,n,s){
    this.id = i;
    this.name = n;
    this.salary = s;
}

const e = new Emp(103,"rajesh",5000);
console.log(e);

// data manupulating in object
//1. access particular data
console.log(emp.id);
console.log(e.name);

//2. adding data
emp.age = 35;
console.log(emp);

//3. update data 
emp.salary = 2000000;

