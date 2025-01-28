function slidingWindow(arr) {
  let left = 0;
  let right = 0;
  let max = 1;
  let counter = {};

  counter[arr[0]] = 1;

  while (right < arr.length - 1) {
    right++;

    if (counter[arr[right]]) {
      counter[arr[right]]++;
    } else {
      counter[arr[right]] = 1;
    }

    while (counter[arr[right]] == 3) {
      counter[arr[left]]--;
      left++;
    }

    max = Math.max(max, right - left + 1);
  }

  return max;
}

console.log(slidingWindow("bcbbbcba"));
