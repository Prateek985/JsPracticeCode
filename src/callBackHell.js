//callback: pyramid of doom

//multiple async operation/tasks, they depend on each other ---- nested callback/indented callbacks
//hard to read
//hard to debug

//example: coffee machine
//1. start the machine --- 5 sec
//2. Grind the beans --- 3 sec
//3. Boil water --- 4 sec
//4. Brew coffee --- 3 sec
//5. Pour into cup --- 2 sec

setTimeout((name, age)=> {
     console.log('hello',name,age);

}, 3000, 'Devika', 30);

setTimeout(()=>{
    console.log('account is created');

}, 4000);

function startMachine(callback){
    setTimeout(()=>{
        console.log('Machine started');
        callback();
    }, 5000);
};

function grindBeans(callback){
    setTimeout(()=>{
        console.log('Grinding coffee beans');
        callback();
    }, 3000);
};

function boilWater(callback){
    setTimeout(()=>{
        console.log('Boiling Water');
        callback();
    }, 4000);
};

function brewCoffee(callback){
    setTimeout(()=>{
        console.log('Brewing Coffee');
        callback();
    }, 5000);
};

function pourCoffee(callback){
    setTimeout(()=>{
        console.log('puring coffee into cup');
        callback();
    }, 2000);
};

startMachine(()=>{
    grindBeans(()=>{
        boilWater(()=>{
            brewCoffee(()=>{
                pourCoffee(()=>{
                    console.log('coffee is ready');
                })
            })
        })
    })
})