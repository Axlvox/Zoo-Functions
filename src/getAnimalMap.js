const data = require('../data/zoo_data');

const getAnimalMap = (options) => {
  const { includeNames, sorted, sex } = options || {};
  const animalMap = {};
  const residentBySex = (residents) => (sex
    ? residents.filter((resident) => resident.sex === sex) : residents);
  const createdEntry = (name, residents) => {
    if (includeNames) {
      const names = residents.map((resident) => resident.name);
      return sorted ? { [name]: names.sort() } : { [name]: names };
    }
    return name;
  };
  data.species.forEach(({ location, name, residents }) => {
    const filterResid = residentBySex(residents);
    const animalEntry = createdEntry(name, filterResid);
    animalMap[location] = animalMap[location]
      ? [...animalMap[location], animalEntry] : [animalEntry];
  });
  return animalMap;
};
module.exports = getAnimalMap;
