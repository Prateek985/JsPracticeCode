//1. simple function: no input and no return
function test(){ // 0 input
    console.log('test function');
    //no output: no return keyword----void
}

console.log(typeof test);

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
//call by value

console.log('----------------------');
//AC: create a function.
//which will calculate the student marks...range: 1 to 100
//input param: studentName(string)
//return: marks of the student (number)
//if student name is not found... print student name is not found and return -1.

/**
 * 
 * @param {string} studentName 
 * @returns this functions return the studnet marks
 */
function getStudentMarks(studentName){
    console.log('getting marks of student' + studentName);
    if(studentName === 'ravi'){
        return 90;
    }
    if(studentName === 'uday'){
        return 80;
    }
    if(studentName === 'ankit'){
        return 100;
    }
    else{
        console.log(`${studentName} is not found`);
        return -1;
    }
};

let m1 = getStudentMarks('ravi');
console.log(m1);

console.log('======================');

/**
 * 
 * @param {string} studentName 
 */
function getmarks(studentName){
    console.log('getting marks of student' + studentName);
    
    switch (studentName.trim().toLowerCase()) {
        case 'ravi':
            return 90;
        case 'pooja':
            return 80;
        case 'uday':
            return 100;     
        default:
            console.log(`${studentName} is not found`);
            return -1;
    }
}

let m2 = getmarks(studentName);
console.log(m2);

console.log('======================');

/**
 * 
 * @param {number} productPrice 
 * @param {number} tax 
 * @param {number} latefee 
 * @param {number} gst 
 * @returns 
 */
function getTotalBilling(productPrice, tax, latefee, gst){
      console.log('calculate the final billing....');
      return productPrice + tax + latefee; 
};

let amt = getTotalBilling(1000, 10, 20, 5);
console.log(amt);

console.log(typeof getTotalBilling);
console.log(getTotalBilling.name);
console.log(getTotalBilling.length);


