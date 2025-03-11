function binarySearch(arr, target, left = 0, right = undefined) {
  if (right === undefined) {
    right = arr.length - 1;
  }
  
  let mid = -1;

  while (left < right) {
    mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return -1;
}

function exponentialSearch(arr, target) {
  if (arr[0] === target) {
    return 0;
  }

  let n = arr.length;
  let i = 1;

  while (i < n && arr[i] < target) {
    i *= 2;
  }

  if (arr[i] === target) {
    return i;
  }

  return binarySearch(arr, target, Math.floor(i / 2), Math.min(i, n - 1));
}

const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50,
];
const target = 32;
const result = exponentialSearch(arr, target);

console.log("👉 result => ", result);
