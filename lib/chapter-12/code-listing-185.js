'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var set = new Set(['red', 'green', 'blue']);
var arr = [].concat(_toConsumableArray(set));
console.log(arr);