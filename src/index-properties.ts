interface ErrorContainer {
  [key: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email',
  password: 'Must be at least 8 characters',
};
