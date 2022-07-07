const addition = (a: number, b: number): number => {
  return a + b;
}; // type of return value is number

const printResultToConsole = (num: number): void => {
  console.log('Result: ' + num);
}; // type of return value is void, it does not return anything (just undefined)

const addAndHandle = (
  a: number,
  b: number,
  cb: (num: number) => void
): void => {
  const result = a + b;
  cb(result);
};
printResultToConsole(addition(5, 12));

let combineValues: (a: number, b: number) => number;
combineValues = addition;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
