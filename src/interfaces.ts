//interface can only describe the shape of an object
//interface forces a certain structure

interface Named {
  readonly name: string;
  outputName?: string; //optional property
}

interface Greetable extends Named {
  //can extend multiple interfaces
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(name: string) {
    this.name = name;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

let user1: Greetable;

user1 = new Person('Max');

user1.greet('Hi there - I am');

//can also use for functions
interface AddFn {
  (a: number, b: number): number;
}
