'use strict';

var TOKEN = new RegExp('\\s*(\\+|[0-9]+)\\s*', 'y');

function tokenize(TOKEN_REGEX, str) {
  var result = [];
  var match = void 0;
  while (match = TOKEN_REGEX.exec(str)) {
    result.push(match[1]);
  }
  return result;
}

var result = tokenize(TOKEN, '3 + 4');
console.log(JSON.stringify(result));