/**
 *
 *
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/?envType=study-plan-v2&envId=top-interview-150
 */
function maxProfit(prices) {

  // returns 0 if no prices are given

  if (prices.length === 0) {
    return 0;
}

// Initialize maxProfit and minPrice variables
// where minPrice is the first element of the prices array
let maxProfit = 0;
let minPrice = prices[0];

// Iterate through all prices following first element
for (let i = 1; i < prices.length; i++) {

  // minPrice is set to the smaller of minPrice and the current element
  // maxProfit is set to the greater of maxProfit and the difference btwn
  // minPrice and current val
    minPrice = Math.min(minPrice, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
}

return maxProfit;
}