"use strict";
const button = document.querySelector('button');
const handleClick = (message) => {
    console.log('Clicked ' + message);
};
button === null || button === void 0 ? void 0 : button.addEventListener('click', handleClick.bind(null, 'button'));
