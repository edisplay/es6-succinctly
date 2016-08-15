"use strict";

var p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    throw new Error("Error encountered!");
  }, 2000);
});

p.then(function (res) {
  return console.log("Response:", res);
}).catch(function (err) {
  return console.log("Error:", err);
});