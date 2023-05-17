const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const { species } = data;

  if (ids.length === 0) {
    return [];
  }
  
  return species.filter((animal) => ids.includes(animal.id));
};

module.exports = getSpeciesByIds;
