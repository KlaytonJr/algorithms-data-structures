function bubbleSort(array) {
  let size = array.length;
  let isSorted;

  for (item of array) {
    console.log(array);
    isSorted = true;
    for (let j = 0; j < size - 1; j++) {
      if (array[j] > array[j + 1]) {
        isSorted = false;
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }

    if (isSorted) {
      break;
    }
  }

  return array;
}

// console.log(bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
console.log(bubbleSort([1, 2, 3, 4, 5]));
console.log(bubbleSort([5, 2, 1, 4, 3]));