// enhaced object
function new_user(user, age, country, uid){
    return {
        user, 
        age, 
        country,
        id: uid
    }
}

console.log(new_user('Cris', 30, 'Ecuador', 1));