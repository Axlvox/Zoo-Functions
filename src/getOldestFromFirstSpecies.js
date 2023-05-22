const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const employeeId = id;
  const speciesId = data.employees.find((employee) => employee.id === employeeId).responsibleFor[0];
  const species = data.species.find((specie) => specie.id === speciesId);

  if (species) {
    const oldestAnimal = species.residents.reduce((oldest, current) => {
      if (current.age > oldest.age) {
        return current;
      }
      return oldest;
    });

    return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
  }
};

module.exports = getOldestFromFirstSpecies;
