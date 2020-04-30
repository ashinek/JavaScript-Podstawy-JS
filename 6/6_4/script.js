//var os = require('os');
/*var p = os.platform();
console.log(p);
*/
var u = require('underscore');

var array = [1,2,3,4,5];

var x = u._.map(array, function(v){return v +10});
