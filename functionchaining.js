function login(){
    console.log('login to app');
    search();
}

function search(){
    console.log('perform search');
    addToCart();
}

function addToCart(){
    console.log('add to cart');
    login();
}

console.log('==================');

function billing(){
    console.log('billing function');
    let x = 10;
    let y = x + 10;
    console.log(y);
    billing(); //recursive
}

billing();

//factorial number: recursive

/**
 * 
 * @param {number} 
 * @param {*} n 
 * @returns 
 */
function factorial(n){
    if(n == 0 || n == 1){
        return 1;
    }else{
        return n * factorial(n - 1);
    }
}

let factorialResult = factorial(5);
console.log(factorialResult);