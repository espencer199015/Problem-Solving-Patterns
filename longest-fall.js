function longestFall(arr) {
  if (arr.length === 0) {
    return 0; // Return 0 for an empty array.
  }

  let maxFallLength = 1;
  let currentFallLength = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      currentFallLength++;
    } else {
      currentFallLength = 1;
    }

    if (currentFallLength > maxFallLength) {
      maxFallLength = currentFallLength;
    }
  }

  return maxFallLength;
}

module.exports = longestFall;