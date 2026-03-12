//Arrow function: =>
//has no name: Anonymous function
//used in call back function

//no param arrow function:
let print = ()=> console.log('hello JS');
print();

//1 param arrow function:

let printName = (name) => console.log(name);
printName('prateek');

console.log('=================');

let test = (a)=> console.log(a+10);
test(10);

console.log('=================');

let printNum = (num)=> console.log(`total number: ${num + 100}`);
printNum(40);

console.log('=================');

let printTotal = (total)=> console.log(total + 90);
printTotal(1000);

console.log('=================');

let printbill = (billing)=> console.log(billing + 10);
printbill(200);

console.log('=================');

let pro = (a)=> a + 4;
let r1 = pro(100);
console.log(r1);

console.log('=================');
/**
 * 
 * @param {string} namelower 
 * @returns 
 */
let doLowerCase = (namelower)=> namelower.toLowerCase();
let lower = doLowerCase('TESTING');
console.log(lower);

console.log('=================');

let sum = (a,b)=> a + b;
let p1 = sum(10, 20);
console.log(p1);

console.log('=================');

let initDriver = (browsername)=> {
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

let flag = initDriver('chrome');
if(flag){
    console.log('please launch the google.com url')
}

console.log('=================');
//example with the help of RestParameter

let printDetails = (...details)=>{
    console.log(details);
    console.log(details.length);
    return 0;
};

let s1 = printDetails('pawan', 'pooja', 'sridevi');
console.log(s1);



