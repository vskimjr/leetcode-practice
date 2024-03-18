function maxProfit(prices) {
  let profit = -Infinity;
  for (let i = 0; i < prices.length - 1; i++){
      for (let j = i + 1; j < prices.length;  j++){
          if (prices[j] - prices[i] > profit){
              profit = prices[j] - prices[i];
          }
      }
  }

  if (profit < 0){
      return 0;
  }

  return profit;

};