function reverseWords(s) {
  let left = 0; 
  let right = 0;
  let res = '';

  while (right < s.length) {
    if (s[right] != ' ' && right != s.length - 1) {
      right += 1;
    } else {
      let word = s.slice(left, right+1);
      res = res + word.split('').reverse().join('') + ' ';
      right += 1;
      left = right;
    }
  }

  const resWithoutSpace = res.slice(0, res.length - 1);
  return resWithoutSpace;
}

console.log(reverseWords("car rat"));
console.log(reverseWords("Mr Ding"));
console.log(reverseWords("Let's take LeetCode contest"));