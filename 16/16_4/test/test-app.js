var assert = require('assert');

function add(a,b){
    return a+b;
}

describe('Wartość zwracana przez funkcję add()',function(){
    it('Powinna wynosić 5',function(){
        var result = add(2,3);
        assert.equal(result,2+3);
    });
});