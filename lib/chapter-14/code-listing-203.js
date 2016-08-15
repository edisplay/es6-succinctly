'use strict';

var fileUrls = ['http://example.com/file1.txt', 'http://example.com/file2.txt'];
var httpGet = function httpGet(item) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      return resolve(item);
    }, 2000);
  });
};
var promisedTexts = fileUrls.map(httpGet);

Promise.all(promisedTexts).then(function (texts) {
  texts.forEach(function (text) {
    console.log(text);
  });
}).catch(function (reason) {
  // Receives first rejection among the promises
});