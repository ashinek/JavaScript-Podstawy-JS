var a = 3;

function modifyValue(v) {
	v = v + 3;
	v = v - 2;
	v = v - 4;

	var result = 4 / (v + 1);
	return result;
}

var x = modifyValue(a);
console.log(x);
