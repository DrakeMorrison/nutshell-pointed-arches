const eventsSquared = require('./eventssquared');

const eventsInitializer = () => {
  eventsSquared.startEvents();
  eventsSquared.postEventsEvent();
};

module.exports = {
  eventsInitializer,
};
