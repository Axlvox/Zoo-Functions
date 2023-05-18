const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const { species } = data;

  const targetSpecies = species.find((bicho) => bicho.name === animal);

  if (!targetSpecies) {
    throw new Error('Espécie não encontrada');
  }

  return targetSpecies.residents.every((resident) => resident.age >= age);
};

const result = getAnimalsOlderThan('lions', 7);
console.log(result);

module.exports = getAnimalsOlderThan;
