export type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

const combine = (
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) => {
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    return +input1 + +input2;
  } else {
    return input1.toString() + input2.toString();
  }
};

const combinedAges = combine(30, 54, 'as-number');
const combinedStringAges = combine('30', 54, 'as-number');
const combinedNames = combine('Max', 'Anna', 'as-text');
