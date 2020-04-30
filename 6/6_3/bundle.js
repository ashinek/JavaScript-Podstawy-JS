(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = function(a,b){
	return a +b;
}
},{}],2:[function(require,module,exports){
module.exports = function(a,b){
	return a / b;
}
},{}],3:[function(require,module,exports){
module.exports = function(a,b){
	return a * b;
}
},{}],4:[function(require,module,exports){
var add = require('./functions/add.js');
var divide = require('./functions/divide.js');
var multiply = require('./functions/multiply.js');

console.log(add(2,3));
console.log(divide(2,3));
console.log(multiply(2,3));
},{"./functions/add.js":1,"./functions/divide.js":2,"./functions/multiply.js":3}]},{},[4]);
