// @ts-check

/**
 * The number of work hours in a day
 */
const HOURS_PER_DAY = 8;

/**
 * The number of billable days in a month
 */
const BILLABLE_DAYS_PER_MONTH = 22;

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  return HOURS_PER_DAY * ratePerHour;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  const DAY_RATE = dayRate(ratePerHour);
  const NUM_DAYS = Math.floor(budget / DAY_RATE);
  return NUM_DAYS;
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount (e.g. 20% --> 0.2)
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const NUM_FULL_MONTHS = Math.floor(numDays / BILLABLE_DAYS_PER_MONTH);
  const NUM_REMAINING_DAYS = numDays % BILLABLE_DAYS_PER_MONTH;
  const DAY_RATE = dayRate(ratePerHour);

  const MONTHLY_TOTAL = DAY_RATE * BILLABLE_DAYS_PER_MONTH;
  const DISCOUNTED_MONTHLY_TOTAL = MONTHLY_TOTAL - MONTHLY_TOTAL * discount;
  const FULL_RATE_TOTAL = DAY_RATE * NUM_REMAINING_DAYS;

  const FINAL_TOTAL = Math.ceil(DISCOUNTED_MONTHLY_TOTAL * NUM_FULL_MONTHS + FULL_RATE_TOTAL);

  return FINAL_TOTAL;
}
