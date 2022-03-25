// @ts-check

/**
 * Determines whether or not you need a licence to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
  if (kind === 'car' || kind === 'truck') {
    return true;
  } else {
    return false;
  }
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
  let chosenOne;

  if (option1 < option2) {
    chosenOne = option1;
  } else {
    chosenOne = option2;
  }

  return `${chosenOne} is clearly the better choice.`;
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age in years
 * @returns expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
  if (age < 3) {
    return originalPrice * 0.8; // 80%
  } else if (age > 10) {
    return originalPrice * 0.5; // 50%
  } else {
    // 3 <= age && age <= 10
    return originalPrice * 0.7; // 70%
  }
}
