//data types: type of data:

//1. primitive data types: simple | stack | not part of object/reference | fixed memory | NO Garbage Collection
//2. non primitive data types: Object/ Reference/ class/ Arrays/ Functions/ Interface/ Dynamic memory | Heap

// primitive data types: 
//1. number
//range: -9007199254740991 to 9007199254740991
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);

let i = 10;
console.log(i);
console.log(typeof i);

let j = 12.33;
console.log(j);
console.log(typeof j);

const PI = 3.14;
console.log(typeof PI);

//1 byte = 8 bits;
//size: 8 bytes = 64 bits

//2. string: '' or ""
let name = "testing";
let firstName = 'prateek';
let gender = 'm';
let isEx = 'y';
let ph = '9074788900';

console.log(firstName);
console.log(typeof firstName);
console.log(typeof gender);
console.log(typeof ph);

let productName = 'Macbook Pro';
console.log(productName);

//size: 2 bytes per character
let e = 'abc'; // 3*2=6 bytes
console.log('my first name is ' + firstName);

//3. Boolean: true/false
const flag = true;
console.log(flag);
let isEmpActive = false;
console.log(isEmpActive);
console.log(typeof flag);

const rest = 'true';
console.log(typeof rest);
//size: ~ 1 byte = 8 bits

console.log("---------------");
//range: -9007199254740991 to 9007199254740991
let num = 9007199254740991;
let num1 = num + 1;
console.log(num1);//9007199254740992

//4. BigInt: used for long values/large value
let amt = 9007199254740992n;
console.log(typeof amt);// bigInt

let te = 10n;
console.log(typeof te);// bigInt

let x = 10n; //bigInt
let y = 20n; //bigInt
//console.log(x+y);// Can not mix BigInt and other type
console.log(x+y);//30n

let pop = BigInt(100);
console.log(pop);//100n --- bigInt
console.log(typeof pop); //bigInt

console.log(pop / 2n);

//5. null: nothing/no value
//size: 0 to 8 bytes - depends on the engine
let myName = null;
let data = null;
console.log(data);//null
console.log(typeof data);//object - Java Script bug

//6. Undefined
let v;
console.log(v);//undefined
//size: 0 to 8 bytes - depends on the engine

var c;
console.log(c);//undefined
console.log(typeof c);//undefined

let sd = "undefined";
console.log(typeof sd);//string

let qa = undefined;
console.log(qa)//undefined


