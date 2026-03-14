//callback: a CB function is a simple function passed as an argument to another function, which will be called later.

//call by value
//call by obj ref
//call by function: callback

let sayHi = function () {
    console.log('hi');
};

let sayHello = function (callback) {
    callback();
};

sayHello(sayHi);//calling a function by passing a function name

console.log('==============');

//utility function
let add = (a,b)=> a + b;
let sub = (a,b)=> a - b;
let mul = (a,b)=> a * b;
let div = (a,b)=> a / b;

//core function: end user function
function calculater(a, b, callback){
    callback(a,b);
};

calculater(10,20,add);

console.log('==============');

function initDriver(browsername) {
    console.log(`browser name is : ${browsername}`);

    switch (browsername.trim().toLowerCase()) {
        case 'chrome':
            console.log('launch chrome');
            return true;
        case 'firefox':
            console.log('launch firefox');
            return true;
        case 'edge':
            console.log('launch edge');
            return true;
        default:
            console.log('plz pass the right browser', browsername);
            return false;
    }
};


function endurl(browsername, url, callback){
    console.log('starting the test case execution............');

    callback(browsername);

    console.log('enter the url', url);
};

enterurl('chrome', 'https://www.google.com', initDriver);

console.log('==============');





