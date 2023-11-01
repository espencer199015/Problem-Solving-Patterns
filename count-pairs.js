function countPairs(arr, target) {
  const seen = new Set();
  let count = 0;

  for (const num of arr) {
    const complement = target - num;
    
    if (seen.has(complement)) {
      count++;
    }

    seen.add(num);
  }

  return count;
}

module.exports = countPairs;