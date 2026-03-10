// function expression

let cart = function addToCart(productName){
    console.log('add to cart', productName);
    return true;
};

console.log(cart());

//function expression name: cart
//actual function name: addToCart

//addToCart(): error

//call the function:
let n1 = cart('macbook pro');
console.log(n1);

console.log(cart.name);

let waitfor = function waitforElementPresenceWithExplicitWaitOnThePage(productName){
    console.log('add to cart', productName);
     return true;
};

console.log(waitfor('sim'));

let flag = waitfor('imac');
console.log(flag);

flag = waitfor('macbook pro');
console.log(flag);

flag = waitfor('samsung');
console.log(flag);

console.log(waitfor.name);