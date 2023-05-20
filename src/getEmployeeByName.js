const data = require('../data/zoo_data');

const getEmployeeByName = (...employeeName) => {
  const { employees: objeto } = data;
  if (employeeName.length === 0) {
    return {};
  }

  const worker = Object.values(objeto).find((employee) =>
    employeeName.includes(employee.firstName)
    || employeeName.includes(employee.lastName));

  return worker;
};

module.exports = getEmployeeByName;
