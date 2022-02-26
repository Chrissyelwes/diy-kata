const humanCatDogYears = number => {
  let catYears = ((number-2)*4);
  let dogYears = ((number-2)*5);

  if (number === 1) {
      return [number, 15, 15];
  } else if (number === 2) {
    return [number, 24, 24];
  } else if (number >= 3) {
      return [number, 24+catYears, 24+dogYears];
   }   
  };

module.exports = humanCatDogYears;
