let num = [10, 20, 30, 40];

console.log(num.length);//4
console.log(num);
num.push(50);//will be added after the highest value, at the end.
console.log(num);
num.unshift(5);//will be added at the lowest, at the 0th index.
console.log(num);

let i = num.pop();//remove the last element
console.log(num);
console.log(i);
num.pop();
console.log(num);

num.shift();//remove the first value
console.log(num);

//splice:
let fruits = ['apple', 'graphs', 'banana', 'cherry'];
console.log(fruits);
fruits.slice(fruits.length,0, 'barries');
console.log(fruits);

console.log("-----------");
let marks = [12, 1, 2, 3, 4, 1, 5, 6, 1];
console.log(marks.indexOf(1));//1
console.log(marks.indexOf(4));//4
console.log(marks.indexOf(50));//-1

console.log(marks.indexOf(1))//0----1st occurance of 1

console.log(marks.indexOf(1, marks.indexOf(1)+1));//4- 2nd occurance of 1

let myfruits = ['apple', 'grapes', 'banana', 'apple', 'cherry', 'apple'];
console.log(myfruits.indexOf('apple'));//0 1st occurance of apple
console.log(myfruits.indexOf('apple', myfruits.indexOf('apple') + 1));//3 ---2nd occurance of apple

let p = myfruits.indexOf('apple', myfruits.indexOf('apple') + 1);

console.log(myfruits.indexOf('apple', p + 1));//5---3rd occurance of apple

