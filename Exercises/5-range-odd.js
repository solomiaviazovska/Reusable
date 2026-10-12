'use strict';

const rangeOdd = (start, end) => {
  const result = [];
  for (let i = start; i <= end; i++) {
    if (Math.abs(i % 2) === 1) result.push(i);
  }
  return result;
};

module.exports = { rangeOdd };
