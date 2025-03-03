/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here

  return days * 40 - (days >= 7 ? 50 : days >= 3 ? 20 : 0);
}

module.exports = calculateRentalCost;
