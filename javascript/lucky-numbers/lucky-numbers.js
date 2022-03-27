// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  return parseInt(array1.join(''), 10) + parseInt(array2.join(''), 10);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  return String(value) === [...String(value)].reverse().join('');
  // If `value` could not be trusted to be a valid number:
  // (would also need to check if Number.isFinite(value))
  // return parseInt(value, 10).toString() === [...parseInt(value, 10).toString()].reverse().join('');
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (!input) {
    return 'Required field';
  }

  // Evaluate the numeric representation of the input as a boolean
  return Number(input) ? '' : 'Must be a number besides 0';
}
