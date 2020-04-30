var person = {
	name: 'Jan Kowalski',
	age: 35,
	email: 'jkowalski@strefakursow.pl',
	sayHello: function(){
		alert('Witaj '+ this.name);
	}
}

alert(person.name);
person.sayHello();