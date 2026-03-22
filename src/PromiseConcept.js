//promise:- is used to handle Async operations(thinks that take time).
//ex:- 
//1. api calls
//2. file reading
//3. AJAX: element is coming on the page after 5, 10, 20.
//4. DB query

//instead of callback, js has introduced promises to handle the async operations in a cleaner way....

//promise
//you place the order: promise is created
//prepare the food: pending/in-progress
//food is delivered: Resolved/ fulfillment
//cancel the order: Rejected/ Error

//3. states: pending, Resolved & Rejected

let myPromise = new Promise((resolved, rejected)=>{
    let success = true;
    if(success){
        resolved('Task completed');
    }
    else{
        rejected('Task failed');
    }
});

myPromise
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error);
    })

console.log('-----------------------')

//Ex:- real async operations: setTimeout: 3000ms

let dataPromise = new Promise((resolved, rejected)=>{
    setTimeout(() => {
        resolved('data is received from server')
    }, 3000);
});

dataPromise
      .then((result)=>{
        console.log(result);
      })
      .catch((error)=>{
         console.log(error);
      });

//Ex:- real async operation with user data: setTimeout: 3000ms      

function fetchUser(flag){
    return new Promise((resolved, rejected)=>{

    if(flag){
       setTimeout(() => {
        let user = {
            name: 'prateek',
            role: 'QA'
        }
        resolved(user);
    }, 3000);
    }
    else{
         setTimeout(() => {
           rejected('user is not found: 404 NOT FOUND')  
        }, 3000);
    }    
    
});
}

fetchUser
    .then((user)=>{
        console.log(user);
    })
    .catch((error)=>{
        console.log(error);
    })
    .finally(()=>{
        console.log('disconnect with DB')
    });

console.log('-----------------------')    
//promise chaining:

let p1 = new Promise((resolve, rejected)=>{
    resolve(5);
});

p1 
   .then((n)=> n * 2)
   .then((n)=> n * 3)
   .then((result)=> console.log(result));
