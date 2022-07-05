let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;
console.log(user);

const user1 = {
    name: 'John'
};
user1.name = 'Pete';
console.log(user1);


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
function sumSalary(salaries){
    let total = 0;
    for (let value of Object.values(salaries)){
        total += value;
    }
    return total;
}
let sum = sumSalary(salaries);
console.log(sum);