function sameFrequency(num1, num2) {
  const strNum1 = num1.toString();
  const strNum2 = num2.toString();

  if (strNum1.length !== strNum2.length) {
    return false; // If the lengths are different, frequencies can't be the same.
  }

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (const digit of strNum1) {
    frequencyCounter1[digit] = (frequencyCounter1[digit] || 0) + 1;
  }

  for (const digit of strNum2) {
    frequencyCounter2[digit] = (frequencyCounter2[digit] || 0) + 1;
  }

  for (const key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }

  return true;
}

module.exports = sameFrequency;