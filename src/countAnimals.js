const data = require('../data/zoo_data');

const getAllAnimalCounts = (animalSpecies) => {
  const animalCount = {};
  animalSpecies.forEach((animal) => {
    animalCount[animal.name] = animal.residents.length;
  });
  return animalCount;
};

const getSpeciesAnimalCount = (animalSpecies, species, sex) => {
  const selectedSpecies = animalSpecies.find((animal) => animal.name === species);
  if (selectedSpecies) {
    if (sex) {
      const selectedAnimals = selectedSpecies.residents.filter((resident) => resident.sex === sex);
      return selectedAnimals.length;
    }
    return selectedSpecies.residents.length;
  }
  return {};
};

const getAllSpeciesAnimalCounts = (animalSpecies, sex) => {
  const animalCount = {};
  animalSpecies.forEach((animal) => {
    if (sex) {
      const selectedAnimals = animal.residents.filter((resident) => resident.sex === sex);
      animalCount[animal.name] = selectedAnimals.length;
    } else {
      animalCount[animal.name] = animal.residents.length;
    }
  });
  return animalCount;
};

const countAnimals = ({ species, sex } = {}) => {
  const { species: animalSpecies } = data;

  if (!species && !sex) {
    return getAllAnimalCounts(animalSpecies);
  }

  if (species) {
    return getSpeciesAnimalCount(animalSpecies, species, sex);
  }

  return getAllSpeciesAnimalCounts(animalSpecies, sex);
};

module.exports = countAnimals;
