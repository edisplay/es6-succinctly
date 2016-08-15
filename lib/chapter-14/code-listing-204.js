"use strict";

function delay(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, ms);
  });
}

Promise.race([delay(3000).then(function () {
  return "I finished second.";
}), delay(2000).then(function () {
  return "I finished first.";
})]).then(function (txt) {
  console.log(txt);
}).catch(function (err) {
  console.log("error:", err);
});