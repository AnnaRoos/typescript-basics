//Decorator Factory
const Logger = (logString: string) => {
  return (constructor: Function) => {
    console.log(logString);
    console.log(constructor);
  };
};

const WithTemplate = (template: string, hookId: string) => {
  return <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) => {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector('h1')!.textContent = this.name;
        }
      }
    };
  };
};

@Logger('Logging - People')
@WithTemplate('<h1>My people object</h1>', 'app')
class People {
  name = 'Max';

  constructor() {
    console.log('Creating people...');
  }
}

const peep = new People();

const Log = (target: any, propertyName: string | Symbol) => {
  console.log('Property Decorator');
  console.log(target);
  console.log(propertyName);
};
const Log2 = (target: any, name: string, descriptor: PropertyDescriptor) => {
  console.log('Accessor Decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
};

const Log3 = (
  target: any,
  name: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor => {
  console.log('Method Decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
  return descriptor;
};

const Log4 = (target: any, name: string | Symbol, position: number) => {
  console.log('Parameter Decorator');
  console.log(target);
  console.log(name);
  console.log(position);
};

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price');
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

const product = new Product('Book', 19);
product.price = 10;
console.log(product.getPriceWithTax(0.5));

const Autobind = (
  _target: any,
  _methodName: string,
  descriptor: PropertyDescriptor
) => {
  const originalMethod = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      return originalMethod.bind(this);
    },
  };
  return adjustedDescriptor;
};

class Printer {
  message = 'This works';

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const printer = new Printer();

const newButton = document.querySelector('button')!;
newButton.addEventListener('click', printer.showMessage);

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[];
  };
}

const registerValidator: ValidatorConfig = {};

const Required = (target: any, propertyName: string) => {
  registerValidator[target.constructor.name] = {
    ...registerValidator[target.constructor.name],
    [propertyName]: [
      ...(registerValidator[target.constructor.name]?.[propertyName] ?? []),
      'required',
    ],
  };
};

const PositiveNumber = (target: any, propertyName: string) => {
  registerValidator[target.constructor.name] = {
    ...registerValidator[target.constructor.name],
    [propertyName]: [
      ...(registerValidator[target.constructor.name]?.[propertyName] ?? []),
      'positive',
    ],
  };
};

const validate = (obj: any) => {
  const objConfig = registerValidator[obj.constructor.name];
  if (!objConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objConfig) {
    for (const validator of objConfig[prop]) {
      switch (validator) {
        case 'required':
          isValid = isValid && !!obj[prop];
          break;
        case 'positive':
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
};

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const titleEl = document.getElementById('title') as HTMLInputElement;
  const priceEl = document.getElementById('price') as HTMLInputElement;
  const title = titleEl.value;
  const price = +priceEl.value;
  const createdCourse = new Course(title, price);
  if (!validate(createdCourse)) {
    alert('Invalid input, please try again');
    return;
  }
  console.log(createdCourse);
});
