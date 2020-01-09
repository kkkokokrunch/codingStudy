var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + '' + lastName;
    }
    return User;
}());
function greeter(person) {
    return 'Hello ' + person.firstName + '' + person.lastName;
}
// let user = {
//     firstName:'Xu',
//     lastName:'Zehui'
// }
var user = new User('Xu', 'Zehui');
console.log(greeter(user));
