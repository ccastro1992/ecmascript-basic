// Default Params
function newUser(name, age, country){
    var name = name || 'Cristhian';
    var age = age || 30;
    var country = country || 'EC';
    console.log(name, age, country);
}

newUser();
newUser('Javier', 32, 'MX');

function newAdmin(name='Cristhian', age=30, country='Chile'){
    console.log(name, age, country);
}

newAdmin();
newAdmin('Ana', 20, 'ARG');