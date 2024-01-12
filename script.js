const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function binarySearch(n, array) {
  let middleIndex = Math.floor(array.length / 2);

  if (array.length === 1 && array[0] !== n) {
    return "Number not found in the array";
  } else if (array[middleIndex] === n) {
    return `Found your number: ${n}`;
  } else if (n < array[middleIndex]) {
    return binarySearch(n, array.slice(0, middleIndex));
  } else if (n > array[middleIndex]) {
    return binarySearch(n, array.slice(middleIndex));
  }
}

const result = binarySearch(9, sortedArray);

console.log(result);
