"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combine = (input1, input2, resultConversion) => {
    if ((typeof input1 === 'number' && typeof input2 === 'number') ||
        resultConversion === 'as-number') {
        return +input1 + +input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
};
const combinedAges = combine(30, 54, 'as-number');
const combinedStringAges = combine('30', 54, 'as-number');
const combinedNames = combine('Max', 'Anna', 'as-text');
