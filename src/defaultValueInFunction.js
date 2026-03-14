function login(username, password, role = 'admin', status = 'active'){
    console.log(username, password, role, status);
};

//login('prateek123', 'prateek@123');

//login('prateek123', 'prateek@123', 'seller');
//login('kiran', 'kiran@123', 'inactive');// kiran kiran@123 inactive active

login('kiran', 'kiran@123', NaN, 'inactive');// kiran kiran@123 NaN inactive

login('kiran', 'kiran@123', 'admin' , 'inactive'); // kiran kiran@123 admin inactive


