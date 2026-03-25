
class Employee{
    name;
    age;
    salary;
    isper;

    //constructor: only one const.... is allowed
    constructor(name, age, salary, isper){
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.isper = isper;
    };

    //method
    study(){
        console.log(`${this.name} is studying here...`);
    }

    getInfo(){
        console.log(`${this.name}, ${this.age}, ${this.salary}, ${this.isper}`);
    };

};

//object is the employee class: using new keyword
let e1 = new Employee('Tom', 30, 12.5, true);
console.log(e1.name, e1.age);
e1.study();
e1.getInfo();

let e2 = new Employee('peter', 35, 13.14, false);
