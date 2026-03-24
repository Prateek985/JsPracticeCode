//async function: async keyword as prefix.
// it always returns a promise.
//inside the async function body: we have to write multiple await(asynchronous/promises) steps.

async function hello(){
    return 'hello world';
}

hello()  
    .then(res => console.log(res));

function fetchData(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve('user data');
        }, 3000);
    })
};    

async function getdata(){
    console.log('fetching data');
    let res = await fetchData();
    console.log(res);
    console.log('data fetching done');
}

getdata();

console.log('======================');

function startMachine(){
    return new Promise((resolve, rejected)=>{
        setTimeout(()=>{
            console.log('machine started');
            resolve();
        }, 5000)
    })
}

function grindBeans(){
    return new Promise((resolve, rejected)=>{
        setTimeout(()=>{
            console.log('grinding coffee beans');
            resolve();
        }, 3000)
    })
}

function boilWater(){
    return new Promise((resolve, rejected)=>{
        setTimeout(()=>{
            console.log('Boiling Water');
            resolve();
        }, 2000)
    })
}

function brewCoffee(){
    return new Promise((resolve, rejected)=>{
        setTimeout(()=>{
            console.log('Brewing Coffee');
            resolve();
        }, 3000)
    })
}

function pourCoffee(){
    return new Promise((resolve, rejected)=>{
        setTimeout(()=>{
            console.log('pouring coffee into cup');
            resolve();
        }, 1000)
    })
}

async function makecoffee(){
    await startMachine();
    await grindBeans();
    await boilWater();
    await brewCoffee();
    await pourCoffee();

    console.log('coffee is ready....');
}

makecoffee();

console.log('======================');

function waitforElement(locator, timeout){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let isElefound = true;
            if(isElefound){
                let webElement = `driver.findElement(${locator})`;
            }else{
                reject(null);
            }
        }, timeout);
    })
}

function click(element){
    console.log(`clicking on the element ${element}`);
}

waitforElement('#loginBtn', 5000)
        .then(element => click(element))
        .catch(error => console.log('element not found....', error));