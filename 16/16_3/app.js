var assert = require('assert');

//jaki jest rzeczywisty rezultat
//czego się spodziewam

function add(a,b){
    return a + b;
}

var result = add(2,3);

assert.equal(result,5,'add() powinna zwrócić wartość 5');