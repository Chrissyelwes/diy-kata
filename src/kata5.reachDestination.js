const reachDestination = (distance, speed) => {
  const estimatedArrival = (distance / speed)
  const roundHalf = Math.round((estimatedArrival * 2) / 2);

  return `I should be there in ${roundHalf} hours`;
};

module.exports = reachDestination;
