// @ts-check

// Default preparation time for a drink (e.g. special offers)
const DEFAULT_PREP_TIME = 2.5;

// Preparation time in minutes per juice from menu
const menuPrepTime = {
  'Pure Strawberry Joy': 0.5,
  Energizer: 1.5,
  'Green Garden': 1.5,
  'Tropical Island': 3,
  'All or Nothing': 5,
};

// Number of wedges per lime size
const LIME_WEDGES_SM = 6;
const LIME_WEDGES_MD = 8;
const LIME_WEDGES_LG = 10;

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case name in menuPrepTime && name:
      return menuPrepTime[name];
    default:
      return DEFAULT_PREP_TIME;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let wedgeSupply = 0;
  let limeCount = 0;

  while (limes.length > 0 && wedgeSupply < wedgesNeeded) {
    switch (limes[limeCount]) {
      case 'small':
        wedgeSupply += LIME_WEDGES_SM;
        break;
      case 'medium':
        wedgeSupply += LIME_WEDGES_MD;
        break;
      case 'large':
        wedgeSupply += LIME_WEDGES_LG;
        break;
    }

    limeCount++;

    if (limeCount < limes.length) {
      continue;
    } else {
      break;
    }
  }

  return limeCount;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  const remainingOrders = [];

  let requiredTime = 0;
  let orderCount = 0;
  while (requiredTime < timeLeft) {
    requiredTime += timeToMixJuice(orders[orderCount]);
    orderCount++;
  }

  while (orderCount < orders.length) {
    remainingOrders.push(orders[orderCount]);
    orderCount++;
  }

  return remainingOrders;
}
