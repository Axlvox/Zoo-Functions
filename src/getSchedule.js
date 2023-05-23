// const zooData = require('../data/zoo_data');

// const getSchedule = (scheduleTarget) => {
//     if (!scheduleTarget) {
//         const schedule = {};
//         for (const day in zooData) {
//           schedule[day] = {
//             exhibition: zooData.species[day].exhibition,
//             officeHour: zooData.species[day].officeHour,
//           };
//         }
//         return schedule;
//       }
//   if (
//     !zooData.species.some((species) => species.name === scheduleTarget) &&
//     !Object.keys(zooData.hours).includes(scheduleTarget)
//   ) {
//     const schedule = {};
//     for (const day in zooData.hours) {
//       const availableAnimals = zooData.species
//         .filter((species) => species.availability.includes(day))
//         .map((species) => species.name);
//       schedule[day] = {
//         officeHour: `Open from ${zooData.hours[day].open}am until ${zooData.hours[day].close}pm`,
//         exhibition: availableAnimals,
//       };
//     }
//     return schedule;
//   }

//   if (!scheduleTarget || typeof scheduleTarget !== 'string') {
//     const schedule = {};
//     for (const day in zooData.hours) {
//       const animals = zooData.species
//         .filter((animal) => animal.availability.includes(day))
//         .map((animal) => animal.name);
//       schedule[day] = {
//         officeHour: `Open from ${zooData.hours[day].open}am until ${zooData.hours[day].close}pm`,
//         exhibition: animals,
//       };
//     }
//     return schedule;
//   }

//   if (zooData.species.find((animal) => animal.name === scheduleTarget)) {
//     const animalData = zooData.species.find((animal) => animal.name === scheduleTarget);
//     return animalData.availability;
//   }

//   if (zooData.hours.hasOwnProperty(scheduleTarget)) {
//     if (scheduleTarget === 'Monday') {
//       return {
//         [scheduleTarget]: {
//           exhibition: 'The zoo will be closed!',
//           officeHour: 'CLOSED',
//         },
//       };
//     }

//     const schedule = {
//       [scheduleTarget]: {
//         officeHour: `Open from ${zooData.hours[scheduleTarget].open}am until ${zooData.hours[scheduleTarget].close}pm`,
//         exhibition: zooData.species
//           .filter((animal) => animal.availability.includes(scheduleTarget))
//           .map((animal) => animal.name),
//       },
//     };

//     return schedule;
//   }
// };

// module.exports = getSchedule;
