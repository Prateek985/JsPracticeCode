let u1 = {
    name: 'ravi',
    age: 30,
    city: 'pune'
};

let u2 = {
    name: 'ankita',
    age: 20,
    city: 'mumbai'
};

let u3 = {
    name: 'pravin',
    age: 40,
    city: 'delhi'
};

console.log(u1);
console.log(u2);
console.log(u3);

console.log("---------------");
u1 = u2;

console.log(u1);
console.log(u2);
console.log(u3);

console.log("---------------");
u2 = u3;

console.log(u1);
console.log(u2);
console.log(u3);

console.log("---------------");
u3 = u1;

console.log(u1);
console.log(u2);
console.log(u3);

//u1 = u2
//u2 = u3
//u3 = u4
//u4 = u1





