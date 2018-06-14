const {authEvents,} = require('./events');
const {retrieveKeys, } = require('./apiKeys');
const {startFriends,} = require('./friends/friendMain.js');

const initializer = () => {
  retrieveKeys();
  authEvents();
  startFriends();
};

initializer();
