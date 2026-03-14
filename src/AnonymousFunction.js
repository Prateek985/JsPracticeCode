// which has no name: Anonymous function

let world = function (){
    console.log('hello world');
    return 100;
};

//console.log(world);
//console.log(world());

let t1 = world();
console.log(t1);

console.log('==========================');


/**
 * 
 * @param {string} browsername 
 */
let initDriver = function (browsername){
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

let isInit = initDriver('chrome');
if(isInit){
    console.log('enter the url: google.com');
}