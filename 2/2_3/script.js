var a = 10;
var b = 34;
var c = 4;
var name = "Dominik";

alert(a / b);

function myFunction(a,b){
	var result = a + b;
	return result;
}

var x =myFunction(2,10);
alert(x);
var y = myFunction(x,10);
alert(y);

var price = 180;

if ( price>200 ){
	alert("Cena Wyższa niż 200.\n Otrzymujesz rabat!");
}
else{
	alert("Nie otrzymałeś rabatu. Zakup poniżej 200zł");
}

var i = 1;
while(i<=10){
	alert(i);
	i++;
}
for( var i = 1; i<=10; i++ ){
	alert(i);
}

var myArray = [20,34,"ok",true,102,"test"];
alert(myArray);
alert(myArray[2]);

for(var i = 0;i<myArray.length;i++){
	alert(myArray[i]);
}