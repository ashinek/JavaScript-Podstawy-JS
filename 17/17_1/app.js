var moment = require('moment');

a = moment().add(6, 'days').format('DD MMMM YYYY');
var b = moment('2014-10-10');
var c = moment('2014-06-10');

console.log(a);
console.log(c.diff(b, 'days'));