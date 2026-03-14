// js object -----> JSON : serlization (marshelling)
// JSON -----> JS Object : de-serlization (unmarshelling)

//API Automation
//POST call: url, json
//user object in JS ------> JSON string
//(Javascript object notation)

//api response (JSON) ---> JS Object

let user = {
     name: 'Tom',
     age: 30,
     city: 'LA',
     isActive: true
 };

 //JS object to JSON string: serlization
 let userjson = JSON.stringify(user, null, 1);
 console.log(userjson);
 console.log(typeof userjson);//String 

 console.log("--------------")

 //JSON string to JS Object:- de-serlization
let userObj = JSON.parse(userjson);
console.log(userObj);
console.log(typeof userObj);//Object

console.log(user.name === userObj.name);//true

console.log("--------------");

let customer = {
    name: 'Ravi',
    age: 45,
    city: 'pune',
    isActive: true,
    address: {
        flat: 103,
        zip: 5454523,
        lat: 10.34,
        long: 11.22
    },
    devices: ['iphone', 'mouse', 'keyboard']
};

//JS object to JSON String:
let customerJson = JSON.stringify(customer, null, 2);
console.log(customerJson);

//call an API: given to the server

//JSON string to JS Object
let customerObj = JSON.parse(customerJson);
console.log(customerObj);

console.log(customer.devices.length === customerObj.devices.length);//true
console.log(customer.address.flat === customerObj.address.flat);//true




