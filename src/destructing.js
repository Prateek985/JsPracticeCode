//Destructing: 
//clean way to extract the values from arrays or objects and assign them to single varible.

let [a, b, c] = [10, 20, 30];
console.log(a, b, c);

let arr = [40, 50, 60];
let [x, y, z] = arr;
console.log(x, y, z);

let [p, , r] = arr;
console.log(p, r);

let ar = [10];
let [a1, b1 = 50] = ar;
console.log(a1);
console.log(b1);

let num = [1, 2, 3, 4, 5, 6];
let [t1, t2, ...pop] = num;
console.log(t1, t2);
console.log(pop);

//object destructing
let user = {
    name: 'Tom',
    age: 30
};

let {name, age} = user;
console.log(name, age);

console.log('==============');

let customer = {
    name: 'peter',
    age: 40,
    city: 'LA',
    zip: 492001
};

function placeholder({name, city}){
    console.log(name, city);
};

placeholder(customer);

function launchBrowser({browsername, headless, url}){
    console.log(browsername, headless, url);
};

let page = {
    title: 'login',
    browsername: 'chrome',
    url: 'https://google.com',
    headless: true,
    footer: [1, 2, 3]
};

launchBrowser(page);

