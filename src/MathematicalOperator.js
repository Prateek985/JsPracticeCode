
//addidation: +
console.log(1 + 1);//2 
console.log("1" + 1);//11
console.log("1" + "1");//11
console.log(1 + "1");//11

//substraction
console.log(1 - "1");//1-1=0
console.log("5" - 2);//5-2=3
console.log("5" - "2");//5-2=3
console.log(5 - 'hello');//5-hello=NaN
console.log('hello' - 10);//hello-10=NaN
console.log('hello' - '10');//hello-10=NaN
console.log('hello' - 'hi');//hello-hi=NaN

//multiplication: *
console.log(1 * "1")//1*1=1
console.log(-1 + "1" * "1");//-1+1*1
console.log(1 + "1" -2);

//division: /
console.log(10 / "2");//5
console.log("10" / "2");//5
console.log(10 + "10" / "2");//10 + 5 = 15
console.log(10 + "10" + 10);// "1010"+10=101010
console.log(10 - "10" - 10);//10-10-10= -10
console.log(10 + "10" -10);//"1010"-10=101010

console.log(9/2);//4.5
console.log(9.0 / 2);//4.5

console.log(0 / 9);//0
console.log(0 / 9.2);//0

console.log(9/0);//Infinity
console.log(9.2/0);//Infinity

console.log(0/0);//NaN
console.log(0.0/0);//NaN
console.log(0/0.0);//NaN
console.log(0.0/0.0);//NaN

console.log("9"/2);//4.5
console.log("9"/"2");//4.5

console.log(9 % 2);//1
console.log(8 % 2);//0
console.log(100 % 3);//1

console.log(-9/2);//-4.5

//unary operator: +
console.log(+"42" + 5);//42+5=47
let billAmount = "1000";
console.log(+billAmount + 100);

//unary negation: -
console.log(-"42" + 5);//-42+5
console.log(-billAmount + 200);//-1000+200=-800

console.log(Number.parseInt(billAmount) + 100);

let bmi = "17.88";
console.log(Number.parseFloat(bmi) + 100);

console.log(-1 + "1");//-11
console.log("1" - 1);//0

console.log(-"42" + "5");//-42+5 = -425


