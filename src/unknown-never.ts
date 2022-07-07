let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

//userName = userInput; this won't work because userInput is unknown

if (typeof userInput === 'string') {
  userName = userInput;
}

const generateError = (message: string, code: number): never => {
  throw { message: message, errorCode: code };
};

generateError('An error occurred!', 500); //does not return anything, not even undefined, since it throws an error
