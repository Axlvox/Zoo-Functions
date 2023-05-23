const data = require('../data/zoo_data');

const getEmployeeSpecies = (employee) => {
  const { species } = data;
  const { responsibleFor } = employee;

  return species
    .filter((specie) => responsibleFor.includes(specie.id))
    .map((specie) => specie.name);
};

const getSpeciesLocations = (species) => {
  const allSpecies = data.species;
  const locations = [];

  species.forEach((specie) => {
    const specieData = allSpecies.find((s) => s.name === specie);
    if (specieData) {
      locations.push(specieData.location);
    }
  });

  return Array.from(new Set(locations));
};

const getEmployeeInfo = (employee) => {
  const species = getEmployeeSpecies(employee);
  const locations = getSpeciesLocations(species);

  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species,
    locations,
  };
};

function getFilteredEmployees({ name, id }, employees) {
  if (!name && !id) {
    return employees;
  }

  let filteredEmployees = employees;
  if (name !== undefined) {
    const secondName = name.split(' ')[1];
    filteredEmployees = employees.filter(
      (employee) =>
        employee.firstName === name
        || employee.lastName === name
        || employee.lastName === secondName,
    );
  }
  if (id !== undefined) {
    filteredEmployees = filteredEmployees.filter((employee) => employee.id === id);
  }
  return filteredEmployees;
}

function getEmployeesCoverage(options) {
  const { employees } = data;
  const filteredEmployees = getFilteredEmployees(options, employees);

  if (filteredEmployees.length === 0) {
    throw new Error('Informações inválidas');
  }

  const employeeInfo = filteredEmployees.map((employee) => getEmployeeInfo(employee));

  if (employeeInfo.length === 1) {
    return employeeInfo[0];
  }

  return employeeInfo;
}

module.exports = getEmployeesCoverage;
