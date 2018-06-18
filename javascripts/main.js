const {authEvents,} = require('./events');
const {retrieveKeys, } = require('./apiKeys');
const {startFriends,} = require('./friends/friendMain.js');

const { pressEnterMessageButtonEvent,} = require('./message/messageEvent');

const initializer = () => {
  retrieveKeys();
  authEvents();
  pressEnterMessageButtonEvent();
  startFriends();

};

initializer();
