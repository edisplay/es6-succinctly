'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var map = new Map([[1, 'one'], [2, 'two'], [3, 'three']]);
var arr = [].concat(_toConsumableArray(map.keys()));
console.log(arr);