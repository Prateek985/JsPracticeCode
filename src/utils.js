
let name = 'Tom';

function add(a, b){
    return a + b;
};

function test(){
    console.log('test method');
}

export default function print(){
    console.log('print somethings');
}

let addTwoNum = (a, b) => a + b;

let user = {
    name: 'John'
};

export { name, flag, add, test, user, addTwoNum};