class Solution {
  coinChange(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (const coin of coins) {
      for (let i = coin; i <= amount; i++) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }

    return dp[amount] !== Infinity ? dp[amount] : -1;
  }
}

const solution = new Solution();

console.log(solution.coinChange([1, 2, 5], 11)); // 3 (5 + 5 + 1)
console.log(solution.coinChange([2], 3)); // -1 (não é possível)
console.log(solution.coinChange([1], 0)); // 0
