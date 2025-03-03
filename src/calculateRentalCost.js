/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here

  const price = 40;

  const offers = {
    3: 20,
    7: 50,
  };

  let rab = 0;

  if (days >= 3) {
    if (days >= 7) {
      rab = offers['7'];
    } else {
      rab = offers['3'];
    }
  }

  return days * price - rab;
}

module.exports = calculateRentalCost;
