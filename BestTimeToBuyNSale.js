// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
prices = [2,4,1]
var maxProfit = function(prices) {
    if(prices.length == 1) return 0;
    let buy=0;
    let sell=0;
    let maxProfit =0
    while (sell<prices.length) {
        let profit = prices[sell] - prices[buy]
        if(profit<=0){
            buy = sell
            sell+=1
        }
        if(profit>0){
            if(profit>maxProfit){
                maxProfit = profit
            }
            sell +=1
        }
    }
    return maxProfit
};
console.log(maxProfit(prices))