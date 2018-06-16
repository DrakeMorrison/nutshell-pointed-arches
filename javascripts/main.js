const {authEvents,} = require('./events');
const {retrieveKeys, } = require('./apiKeys');

const startApp = () => {
  retrieveKeys();
  authEvents();
};

startApp();
