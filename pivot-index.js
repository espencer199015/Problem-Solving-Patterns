function pivotIndex(arr) {
  const totalSum = arr.reduce((acc, num) => acc + num, 0);
  let leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (leftSum === totalSum - leftSum - arr[i]) {
      return i;
    }
    leftSum += arr[i];
  }

  return -1;
}

module.exports = pivotIndex;