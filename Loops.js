
//1. while:
let i = 1;
while (i <= 10){
    console.log(i);
    i++;
    //++i;
    //i = i + 1;
}

console.log('------------');

while(true){
    console.log('welcome to NAL');
    break;
}

console.log('------------');

let j = 1;
while(j <= 50){
    console.log(j);
    if(j % 5 == 0){
        console.log('hello');
        break;
    }
    j++;
}

console.log('------------');

//1 to 10
//for loop
for( let p = 1 ; p <= 10 ; p++){
    console.log(p);
}

//10 to 1
for(let m = 10 ; m >= 1 ; m--){
    console.log(m);
}

let n = 1;
for( ; n <= 10 ; ){
    console.log('hello NAL');
    n++;
}

console.log('------------');
for( ; ; ){
    console.log('welcome to Taj hotel');
    break;
}
console.log('------------');

//do while loop:
//1 to 10;
let k = 1;
do{
    console.log(k);
    k++;
}
while(k <= 10);
