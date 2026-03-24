// let p1 = Promise.resolve('task 1 done');
// let p2 = Promise.reject('500 error');

// p1.then((result) => console.log(result));
// p2.catch((error) => console.log(error));

//1. promise.all() = run multiple promises in parellel mode and wait until all of them succeed;

let p1 = Promise.resolve('task 1 done');
let p2 = Promise.resolve('task 2 done');
let p3 = Promise.resolve('task 3 done');

Promise.all([p1 , p2, p3])
    .then((result)=>{
        console.log(result);
    });

//with wait and all are resolved

let p11 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('display logo on the page');
    }, 3000);
});


let p12 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('load the login form');
    }, 2000);
});


let p13 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('load footer on the page');
    }, 1000);
});

Promise.all([p11 , p12, p13])
    .then((result) => console.log(result));

// one of them is rejected/failed

let c11 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('display logo on the page');
    }, 3000);
});


let c12 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject('load the login form');
    }, 2000);
});


let c13 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('load footer on the page');
    }, 1000);
});

Promise.all([c11 , c12, c13])
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

//race():- return the first promise that finishes.

let t11 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('display logo on the page');
    }, 3000);
});


let t12 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject('load the login form');
    }, 2000);
});


let t13 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('load footer on the page');
    }, 1000);
});

Promise.all([t11 , t12, t13])
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

//allsettled():- wait for all the promises to finish, wether they succedd or failed

let a11 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('display logo on the page');
    }, 3000);
});


let a12 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject('load the login form');
    }, 2000);
});


let a13 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('load footer on the page');
    }, 1000);
});

Promise.all([a11 , a12, a13])
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

//4. any():- return the first successful promise.
// if all promises are failed ---> then it gives the aggregator error

let x11 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('display logo on the page');
    }, 3000);
});


let x12 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject('load the login form');
    }, 2000);
});


let x13 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('load footer on the page');
    }, 1000);
});

Promise.all([x11 , x12, x13])
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
