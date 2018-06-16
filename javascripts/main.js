const {authEvents,} = require('./events');
const {retrieveKeys, } = require('./apiKeys');
const {startFriends,} = require('./friends/friendMain.js');
const {exposeTask,} = require('./tasks/taskMain.js');

const initializer = () => {
  retrieveKeys();
  authEvents();
  startFriends();
  exposeTask();
};

initializer();
