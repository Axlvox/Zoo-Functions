const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  // if (entrants === undefined || entrants.length === 0) {
  //   return 0;
  // }
  
  const conta = {
    adult: 0,
    senior: 0,
    child: 0,
  };

  entrants.forEach((entrant) => {
    if (entrant.age >= 50) {
      conta.senior++;
    } else if (entrant.age >= 18) {
      conta.adult++;
    } else if (entrant.age < 18){
      conta.child++;
    }
  });
  return conta;
};

const calculateEntry = (entrants) => {
  if (!entrants|| entrants.length === 0) {
    return 0;
  }
  const conta = countEntrants(entrants);
  const prices = data.prices;

  const totalCost = conta.adult * prices.adult + conta.senior * prices.senior + conta.child * prices.child;

  return totalCost;
};

module.exports = { calculateEntry, countEntrants };
