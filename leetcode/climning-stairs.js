class Solution {
  climbStairs(n) {
    if (n === 1) {
      return 1;
    }

    let prev = 1;
    let curr = 1;

    for (let i = 2; i <= n; i++) {
      let temp = curr;
      curr = prev + curr;
      prev = temp;
    }

    return curr;
  }
}

const solution = new Solution();
console.log(solution.climbStairs(2)); // 2
console.log(solution.climbStairs(3)); // 3
console.log(solution.climbStairs(5)); // 8
