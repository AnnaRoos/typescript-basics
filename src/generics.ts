const names: Array<string> = []; //same as string[]

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('done');
  }, 2000);
});
//give info about what type the promise will return

const merge = <T extends object, U extends object>(objA: T, objB: U) => {
  return Object.assign(objA, objB);
};

const mergedObj = merge({ name: 'Max' }, { age: 30 }); //Typescript infers types
console.log(mergedObj.name);

interface Lengthy {
  length: number;
}

const countAndDescribe = <T extends Lengthy>(data: T): [T, string] => {
  let descriptionText = 'Got no value.';
  if (data.length === 1) {
    descriptionText = 'Got 1 element.';
  } else if (data.length > 1) {
    descriptionText = `Got ${data.length} elements.`;
  }
  return [data, descriptionText];
};

const extractAndConvert = <T extends object, U extends keyof T>(
  obj: T,
  key: U
) => {
  return 'value' + obj[key];
};

//you have to decide for one type to use
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.removeItem(1);
console.log(numberStorage.getItems());

/* const objStorage = new DataStorage<object>();
objStorage.addItem({ name: 'Max' });
objStorage.addItem({ name: 'Manu' });
objStorage.removeItem({ name: 'Max' });
console.log(objStorage.getItems()); */

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

const createCourseGoal = (
  title: string,
  description: string,
  date: Date
): CourseGoal => {
  let courseGoal: Partial<CourseGoal> = {}; //Partial makes all properties optional
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
};

const people: Readonly<string[]> = ['Max', 'Anna'];
//can not change the array
