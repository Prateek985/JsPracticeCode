// let user = {
//     name: 'Tom',
//     age: 30,
//     city: 'LA',
//     isActive: true
// };

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
    },
    devices: ['iphone', 'mouse', 'keyboard']
};

//for in loop
for(let key in user){
    //console.log(key);
    //console.log(user[key]);
    console.log(key, ':' , user[key]);
}

console.log(user.devices.length);

console.log(1,'hi',true);//1 hi true