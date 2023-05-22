const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const employee = data.employees.find((employee) => employee.id === id);

  if (employee) {
    const speciesId = employee.responsibleFor[0];
    const species = data.species.find((specie) => specie.id === speciesId);

    if (species) {
      const oldestAnimal = species.residents.reduce((maisVelho, atual) => {
        if (atual.age > maisVelho.age) {
          return atual;
        }
        return maisVelho;
      });

      return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
    }
  }
};

module.exports = getOldestFromFirstSpecies;
