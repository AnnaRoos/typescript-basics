"use strict";
const names = [];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('done');
    }, 2000);
});
const merge = (objA, objB) => {
    return Object.assign(objA, objB);
};
const mergedObj = merge({ name: 'Max' }, { age: 30 });
console.log(mergedObj.name);
const countAndDescribe = (data) => {
    let descriptionText = 'Got no value.';
    if (data.length === 1) {
        descriptionText = 'Got 1 element.';
    }
    else if (data.length > 1) {
        descriptionText = `Got ${data.length} elements.`;
    }
    return [data, descriptionText];
};
const extractAndConvert = (obj, key) => {
    return 'value' + obj[key];
};
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.removeItem(1);
console.log(numberStorage.getItems());
const createCourseGoal = (title, description, date) => {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
};
const people = ['Max', 'Anna'];
