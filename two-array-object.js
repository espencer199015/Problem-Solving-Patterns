function twoArrayObject(keys, values) {
  const result = {};

  for (let i = 0; i < keys.length; i++) {
    result[keys[i]] = i < values.length ? values[i] : null;
  }

  return result;
}

module.exports = twoArrayObject;