class Person{
	name: string;
	age: number;

	constructor(name, age){
		this.name = name;
		this.age = age;
	}
}
var p = new Person();
p.name = 'Jan Kowalski';
p.age = 45;

var con = new Person('Jan Kowalski',55);
var con2 = new Person('Tomasz Nowak',39);

console.log(p);
console.log(con);
console.log(con2);