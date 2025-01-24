function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
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

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = binarySearch(array, 3);
console.log('👉 result => ', result);