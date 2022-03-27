// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const num1 = Number(array1.join('')); // or parseInt(array1.join(''), 10);
  const num2 = Number(array2.join(''));

  return num1 + num2;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const stringArray = [...String(value)];
  const reversedString = stringArray.reverse().join('');
  const reversedValue = Number(reversedString);

  return value === reversedValue ? true : false;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (!Boolean(input)) {
    return 'Required field';
  }

  const number = Number(input);
  if (number === 0 || Number.isNaN(number)) {
    return 'Must be a number besides 0';
  }

  if (number > 0) {
    return '';
  }
}
