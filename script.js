const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function binarySearch(n, array) {
  let middle = Math.floor(array.length / 2);

  if (array.length === 1 && array[0] !== n) {
    return "Number not found in the array";
  } else if (array[middle] === n) {
    return `Found your number: ${n}`;
  } else if (n < array[middle]) {
    return binarySearch(n, array.slice(0, middle));
  } else if (n > array[middle]) {
    return binarySearch(n, array.slice(middle));
  }
}

const result = binarySearch(9, sortedArray);

console.log(result);
