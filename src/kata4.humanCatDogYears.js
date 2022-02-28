const humanCatDogYears = number => {
  const catYears = (number - 2) * 4;
  const dogYears = (number - 2) * 5;

  if (number === 1) {
    return [number, 15, 15];
  }
  if (number === 2) {
    return [number, 24, 24];
  }
  if (number >= 3) {
    return [number, 24 + catYears, 24 + dogYears];
  }
};

module.exports = humanCatDogYears;
