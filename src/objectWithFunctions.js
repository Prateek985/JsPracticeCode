let user = {

    //properties: key-value pair
    name: 'mukul',
    age: '30',
    dept: 'QA',
    salary: 34.44,
    city: 'pune',
    comp: 'IBM',

    //function: behaviour
    coding(){
        console.log('user is coding....');
    },

    travel(){
        console.log('user is travelling....');
    },
};

console.log(user);
console.log(user.name);
console.log(user.comp);

user.coding();
user.travel();

console.log('============');

let loginPage = {

    //properties: key-value pair
    username: 'prateek123',
    password: 'prateek@123',
    role: 'admin',

    //function: behaviour
    login(){
        console.log('login is done....' + this.username);
        this.resetpwd();
    },
    resetpwd(){
        console.log('reset pwd');
        this.logout();
    },
    logout(){
        console.log('logout from app');
    }
};
