//object ---- non primitive data type
//reference type

//key - value pair format

let user = {
    name: 'Tom',
    age: 30,
    city: 'LA',
    isActive: true,
    address: {
        flat: 103,
        zip: 5454523,
        lat: 10.34,
        long: 11.22
    }
};

console.log(user);//{ name: 'Tom', age: 30, city: 'LA', isActive: true }
//GET Method
console.log(user.name);//Tom
console.log(user.age);//30
console.log(user.tel);//Undefined
console.log(user['city']);//LA

console.log(user.address.flat);//{ flat: 103, zip: 5454523, lat: 10.34, long: 11.22 }
console.log(user.address.lat);//10.34
console.log(user.address['zip']);//11.22

//Create a new Key- value pair Update Method
user.email = 'tom@gmail.com';
console.log(user);

//delete a pair
delete user.age;
console.log(user);

//update a pair
user.name = 'Tom automation';
console.log(user);