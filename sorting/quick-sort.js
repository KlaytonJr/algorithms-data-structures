function quicksort (arr, left, right) {
  if (left < right) {
    // console.log(arr.slice(left, right + 1));
    const pivot = partition(arr, left, right);
    quicksort(arr, left, pivot - 1);
    quicksort(arr, pivot + 1, right);
  }

  return arr;
}

function partition (arr, left, right) {
  const pivot = arr[right];

  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (arr[j] <= pivot) {
      i++;

      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  const temp = arr[i + 1];
  arr[i + 1] = arr[right];
  arr[right] = temp;

  return i + 1;
}

const arr = [2, 3, 1, 4, 5, 6, 7, 8, 9, 10];
const result = quicksort(arr, 0, arr.length - 1);

console.log(result);

// Quick sort List Comprehension -> Não é eficiente
function quicksortLC (arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    const pivot = arr[0];
    const less_than_pivot = arr.slice(1, arr.length - 1).filter(x => x <= pivot);
    const bigger_than_pivot = arr.filter(x => x > pivot);
    return quicksortLC(less_than_pivot).concat(
      pivot,
      quicksortLC(bigger_than_pivot)
    );
  }
}

const resultLC = quicksortLC(
  arr,
  0,
  arr.length - 1
);
console.log(resultLC);
