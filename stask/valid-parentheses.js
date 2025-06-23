class Solution {
  isValid(s) {
    const stack = [];
    const mapping = {
      ")": "(",
      "]": "[",
      "}": "{",
    };

    for (const ch of s) {
      if (ch in mapping) {
        const topElement = stack.length > 0 ? stack[stack.length - 1] : "#";
        if (topElement === mapping[ch]) {
          stack.pop();
        } else {
          return false;
        }
      } else {
        stack.push(ch);
      }
    }

    return stack.length === 0;
  }
}

const solution = new Solution();

console.log(solution.isValid("()")); // true
console.log(solution.isValid("()[]{}")); // true
console.log(solution.isValid("(]")); // false
console.log(solution.isValid("([)]")); // false
console.log(solution.isValid("{[]}")); // true
