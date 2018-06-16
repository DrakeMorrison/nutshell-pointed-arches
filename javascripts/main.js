const {authEvents,} = require('./events');
const { retrieveKeys, } = require('./apiKeys');
const {startEvents, } = require('./events/eventsSquared');

const initializer = () => {
  retrieveKeys().then(() => {
    authEvents();
    startEvents();
  });
};

initializer();
