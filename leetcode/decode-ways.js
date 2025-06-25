class Solution {
  numDecodings(s) {
    if (!s || s[0] === "0") {
      return 0;
    }

    let prev = 1;
    let curr = 1;

    for (let i = 1; i < s.length; i++) {
      let temp = 0;

      if (s[i] !== "0") {
        temp += curr;
      }

      const twoDigit = parseInt(s.slice(i - 1, i + 1), 10);
      if (twoDigit >= 10 && twoDigit <= 26) {
        temp += prev;
      }

      prev = curr;
      curr = temp;

      if (curr === 0) {
        return 0;
      }
    }

    return curr;
  }
}

const solution = new Solution();

console.log(solution.numDecodings("12")); // 2  ("AB", "L")
console.log(solution.numDecodings("226")); // 3  ("BZ", "VF", "BBF")
console.log(solution.numDecodings("06")); // 0  (inválido)
console.log(solution.numDecodings("11106")); // 2
