function constructNote(message, letters) {
  if (message.length === 0) {
    return true; // An empty message can always be constructed.
  }

  if (letters.length === 0) {
    return false; // If letters are empty, it's impossible to construct the message.
  }

  const letterCount = {};

  // Populate letterCount with the count of each letter in the letters string.
  for (const letter of letters) {
    letterCount[letter] = (letterCount[letter] || 0) + 1;
  }

  // Iterate through the message to check if it can be constructed.
  for (const letter of message) {
    if (!letterCount[letter] || letterCount[letter] === 0) {
      return false; // The letter is not available in sufficient quantity.
    }
    letterCount[letter]--; // Decrease the count of the used letter.
  }

  return true;
}

module.exports = constructNote;