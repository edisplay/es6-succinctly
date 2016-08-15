"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

Symbol("foo") !== Symbol("foo");
var foo = Symbol('test1');
var bar = Symbol('test2');
(typeof foo === "undefined" ? "undefined" : _typeof(foo)) === "symbol";
(typeof bar === "undefined" ? "undefined" : _typeof(bar)) === "symbol";
var obj = {};
obj[foo] = "foo";
obj[bar] = "bar";
console.log(JSON.stringify(obj));
console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));