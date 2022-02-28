const joinNames = namesObj => {
  const names = namesObj.map(({ name }) => name);
  const finalName = namesObj.pop();
  return names.length ? `${names.join(" , ")} & ${finaleName}` : finalName;
};

module.exports = joinNames;
