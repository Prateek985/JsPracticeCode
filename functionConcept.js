//1. simple function: no input and no return
function test(){ // 0 input
    console.log('test function');
    //no output: no return keyword----void
}

//call function:
test();

function printInfo(){
    console.log('hello automation');
    //no output: no return keyword----void
}
printInfo();

console.log('----------------------');

//2. no input but some return.
function getTrainerName(){
    console.log('get Trainer name');
    let trainerName = 'prateek';
    return trainerName;
}

let name = getTrainerName();
console.log(name);

console.log(getTrainerName());

//3. some input but no return type.
/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */
function add(a, b){ //2 parameters
    console.log('adding two numbers');
    let c = a + b;
    return c;
}

let res = add(10,20); //2 values/arguments
console.log(res);

let c = add(10, 'prateek');
console.log(c);

