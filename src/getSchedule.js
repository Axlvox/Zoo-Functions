const data = require('../data/zoo_data');

const getSchedule = (scheduleTarget) => {
  const { species: animalsDays } = data;
  const dias = {
    Monday: {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    },
    Tuesday: {
      officeHour: '',
      exhibition: [''],
    },
    Wednesday: {
      officeHour: '',
      exhibition: [''],
    },
    Thursday: {
      officeHour: '',
      exhibition: [''],
    },
    Friday: {
      officeHour: '',
      exhibition: [''],
    },
    Saturday: {
      officeHour: '',
      exhibition: [''],
    },
    Sunday: {
      officeHour: '',
      exhibition: [''],
    },
  }

  const updatedDias = Object.keys(dias).map((day) => ({
    ...dias[day],
    officeHour: `${hours[day].open}am - ${hours[day].close}pm`,
    exhibition: species.filter((animal) => animal.availability.includes(day)).map((animal) => animal.name),
  }));

  return updatedDias;
};

module.exports = getSchedule;