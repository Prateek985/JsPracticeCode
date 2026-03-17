//1. Map: transform every element of the given array

let number = [1, 2, 3, 4, 5];

let num = number.map(e => e * 2);
console.log(num);
console.log(number);

let sqrt = number.map(e => e * e);
console.log(sqrt);

let empNames = ['uday', 'ankita', 'navya', 'santhil'];
let nameupper = empNames.map();
console.log(nameupper);

//2. filter

let numbers = [10, 20, 30, 45, 50, 60];
let grThan30 = numbers.filter(n => n > 30);
console.log(grThan30);

let evens = numbers.filter(n => n % 2 === 0);
console.log(evens);

let names = ['Prateek', 'Ankita', 'Priyatosh', 'jay', 'om', 'peter'];
let longNames = names.filter(n => n.length > 3);
console.log(longNames);

let productData = ['apple Macbook', 'apple iph', 'samsung Galaxy', 'canon', 'apple air'];
let appleProducts = productData.filter(p => p.startsWith('apple')).filter(p => p.includes('iph'));
console.log(appleProducts);

//3. reduce: combine everything into ONE Value
//it will return single value

let numData = [10, 20, 30, 40, 50];
let total = numData.reduce((sum,n) => sum + n, 0);
console.log(total);

let empAddress = ["500", "Rainbow apts", "Pune", "India"];
let actAddress = empAddress.reduce((address, words) => address + words + " ", " ");
console.log(actAddress);

//chain all the methods.
//number array: even ---> square then --> sum

let mynumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let finalsum = mynumber.filter(e => e % 2 === 0)
                     .map(e => e*e)
                         .reduce((sum,n) => sum + n, 0);
console.log(finalsum);