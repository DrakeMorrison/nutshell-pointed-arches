const eventsSquared = require('./eventssquared');

const eventsInitializer = () => {
  eventsSquared.startEvents();
};

module.exports = {
  eventsInitializer,
};
