// @ts-check

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5;
    case 'Energizer':
    case 'Green Garden':
      return 1.5;
    case 'Tropical Island':
      return 3;
    case 'All or Nothing':
      return 5;
    default:
      return 2.5;
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

  while (wedgeSupply < wedgesNeeded) {
    switch (limes[limeCount]) {
      case 'small':
        wedgeSupply += 6;
        limeCount++;
        break;
      case 'medium':
        wedgeSupply += 8;
        limeCount++;
        break;
      case 'large':
        wedgeSupply += 10;
        limeCount++;
        break;
    }

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
