// collection of different or similar data in js
// Array[]

let num = [10,20,30,40]; //0-3; length=4

console.log(num[-1]);//undefined
console.log(num[0]);//10
console.log(num[3]);//40
console.log(num[4]);//undefined

//li = 0;
//hi = len - 1;
//len = hi + 1;

console.log(num.length);//4
console.log("li = " + 0);//0
console.log("hi = " + (num.length - 1));//3

num[4] = 50;
console.log(num);
console.log(num.length-1);//4

num[10] = 100;
console.log(num);
console.log(num[8]);//undefined
console.log(num[9]);//undefined
console.log(num[10]);//100

num[8] = 900;
console.log(num);

console.log("-----------");

let stName = ['tom', 'ravi'];
console.log(stName);
stName[0] = 'naveen';
console.log(stName);
stName[5] = 'rohit';
console.log(stName);

console.log("-----------");

let empData = ['pratik', 30, 'SDET', 'IBM', 12.33, true];
console.log(empData);
console.log(typeof empData);//object

console.log("-----------");
const p = [10,20,30];
p[0] = 500;
console.log(p);

console.log("-----------");
//string array
let products = ['macbook pro', 'imac', 'samsung Galaxy'];
console.log(typeof products);//object

console.log("-----------");
let nm = Array.of(1,2,3);
console.log(nm);

console.log("-----------");
let pro = Array.from('playwright');
console.log(pro);

let pr = Array.from('1234');
console.log(pr);

//from method will work only for strings.
let pm = Array.from(1234);
console.log(pm);




