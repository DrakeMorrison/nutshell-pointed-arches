const {authEvents,} = require('./events');
const { retrieveKeys, } = require('./apiKeys');

const {pressEnterMessageButtonEvent,} = require('./message/messageEvent');

const initializer = () => {
  retrieveKeys();
  authEvents();
  pressEnterMessageButtonEvent();
};

initializer();
