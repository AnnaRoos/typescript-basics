const paragraph = document.querySelector('p');

const userInputElementOne = <HTMLInputElement>(
  document.getElementById('user-input')
);
const userInputElementTwo = document.getElementById(
  'user-input'
) as HTMLInputElement;

userInputElementOne.value = 'Hi there!';
