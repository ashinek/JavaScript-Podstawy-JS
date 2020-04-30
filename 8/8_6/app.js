var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var p = new Person();
p.name = 'Jan Kowalski';
p.age = 45;
var con = new Person('Jan Kowalski', 55);
var con2 = new Person('Tomasz Nowak', 39);
console.log(p);
console.log(con);
console.log(con2);
