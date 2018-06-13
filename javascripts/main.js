const {authEvents,} = require('./events');
const { retrieveKeys, } = require('./apiKeys');

const initializer = () => {
  retrieveKeys();
  authEvents();
};

initializer();
