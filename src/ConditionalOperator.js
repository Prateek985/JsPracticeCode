//if else block
//if if if else
//if elseif else
//nested if
//switch case

let x = 9;
if(x >= 10){
    console.log('hi');
}
else{
    console.log('bye');
}

console.log('--------------');

if(true){
    console.log('hello');
}
else{
    console.log('bye');
}
console.log('--------------');

let isEleExit = true;

if(isEleExit){
    console.log('click on the element');
}
else{
    console.log('throw error');
}
console.log('--------------');
let marks = 99;

if(marks >= 90){
    console.log('A Grade');
    if (marks >= 95){
        console.log('A++ Grade');
        if(marks === 100){
            console.log('eligible for scholarship');
        }
        else{
            console.log('not eligible for scholarship');
        }
    }
}
else{
    if (marks <= 80){
        console.log('Grade B');
    }
    else{
        console.log('Grade B++');
    }
}
console.log('-parallel---if--if--if--else--');
let browser = 'chrome';

if(browser === 'chrome'){
    console.log('launch chrome');
}
if(browser === 'firefox'){
    console.log('launch firefox');
}
if(browser === 'edge'){
    console.log('launch edge');
}
if(browser === 'safari'){
    console.log('launch safari');
}
else{
    console.log('plz pass the right browser, Invalid browser......');
}

console.log('-if--elseif--else--if------');

let browserName = 'chrome';

if(browserName === 'chrome'){
    console.log('launch chrome');
}
else if(browserName === 'firefox'){
    console.log('launch firefox');
}
else if(browserName === 'edge'){
    console.log('launch edge');
}
else if(browserName === 'safari'){
    console.log('launch safari');
}
else{
    console.log('plz pass the right browser, Invalid browser......');
}
