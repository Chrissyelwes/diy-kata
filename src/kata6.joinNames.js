const joinNames = namesObj => {
  if (namesObj.length > 1) {
    return `${otherNames(namesObj)} & ${namesObj[namesObj.length - 1].name}`;
  } else if (namesObj.length === 1) {
    return namesObj[0].name;
  }
  return "";
};
function otherNames(array) {
  return array
    .splice(0, array.length - 1)
    .map(person => person.name)
    .join(" , ");
}

module.exports = joinNames;
