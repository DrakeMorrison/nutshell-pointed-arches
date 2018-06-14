const {authEvents,} = require('./events');
const {modalBtn,} = require('./articles/article-events');
const {retrieveKeys, } = require('./apiKeys');
const {startFriends,} = require('./friends/friendMain.js');

const initializer = () => {
  retrieveKeys();
  authEvents();
  modalBtn();
  startFriends();
};

initializer();
