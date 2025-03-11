function missingNumber(nums) {
  let x = 0;

  nums.forEach((num) => x ^= num);

  for (let i = 0; i <= nums.length; i++) {
    x ^= i;
  }

  return x;
}

const result = missingNumber([3, 0, 1])
console.log(result)