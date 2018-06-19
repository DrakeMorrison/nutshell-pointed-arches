const {authEvents,} = require('./events');
const {retrieveKeys, } = require('./apiKeys');
const {startFriends, } = require('./friends/friendMain.js');

const startApp = () => {
  retrieveKeys();
  authEvents();
  startFriends();
};

startApp();
