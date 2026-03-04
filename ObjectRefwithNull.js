let user = {
     name: 'Tom',
     age: 30,
     city: 'LA',
     isActive: true
 };

 console.log(user.name);
 user = null;
 console.log(user.name);//null.name type error

 let u1 = {
     name: 'Tom',
     age: 30,
     city: 'LA',
 };

 user = u1;