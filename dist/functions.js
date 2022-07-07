"use strict";
const addition = (a, b) => {
    return a + b;
};
const printResultToConsole = (num) => {
    console.log('Result: ' + num);
};
const addAndHandle = (a, b, cb) => {
    const result = a + b;
    cb(result);
};
printResultToConsole(addition(5, 12));
let combineValues;
combineValues = addition;
console.log(combineValues(8, 8));
addAndHandle(10, 20, (result) => {
    console.log(result);
});
