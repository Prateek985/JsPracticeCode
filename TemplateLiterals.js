//template literals
//back tick = ``
let msg = `this is prateek here`;
console.log(msg);

let para = `hi this is my JS code
I love JS
I want to learn PW
I have exp in selenium`;

console.log(para);

//op: I love 'javascript' coding

console.log('I love \'javascript\' coding');
console.log("I love \"javascript\" coding");

console.log(`I love 'javascript' coding`);
console.log(`I love "javascript" coding`);

console.log(`the product name is 'macbook' and price is '12.33$'`);

//dynamic values 
let username = 'seller';
console.log('welcome' + username);
console.log(`welcome ${username}`);

let productname = 'Apple iMac';
let price = 102.33;
console.log(`the search product name is ${productname} and price is ${price}`);

let playername = 'Joe root';
//button[text()= 'ViratKohli'];

console.log(`//button[text()= '${playername}']`);
console.log(`//button[text()= "${playername}"]`);

let n1=100;
let n2=200;
console.log(`the sum of n1 and n2 is ${n1+n2}`);

let emailid = 'automation@gmail.com';
let password = 'testing@123';

console.log(`the user credentials :
    username : ${emailid} and 
    password : ${password}`);

let str = 'hi this is naveen here';
console.log(typeof str);// string

console.log(emailid, password, 'admin');
console.log('price: ',10);

//'' or "" --- normal string -- static string
//dynamic string -- ``
// ${} -- placeholder




