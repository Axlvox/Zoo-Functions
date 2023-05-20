const data = require('../data/zoo_data');

const isManager = (id) => {
  try {
    const { employees } = data;

    const manager = employees.find((employee) => employee.managers.includes(id));

    if (!manager) {
      throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
    }

    return true;
  } catch (error) {
    console.error(error.message);
    return false;
  }
};

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const result = isManager(stephanieId);
console.log(result);

const getRelatedEmployees = (managerId) => {
  try {
    const { employees } = data;

    const manager = employees.find((employee) => employee.managers.includes(managerId));

    if (!manager) {
      throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
    }
    const colaboradores = employees.filter((employee) => employee.managers.includes(managerId));
    const names = colaboradores.map((employee) => `${employee.firstName} ${employee.lastName}`);

    return names;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

module.exports = { isManager, getRelatedEmployees };
