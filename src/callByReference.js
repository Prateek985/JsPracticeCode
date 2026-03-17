let user = {
    name: 'prateek',
    age: 30,
    city: 'LA'
};

function printUserData(userobj){
    userobj.age = 40;
    userobj.zip = 492001;
    console.log(userobj);
};

printUserData(user);//callbyReference
console.log(user.age);
console.log(user.zip);

