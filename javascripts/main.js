const {authEvents,} = require('./events');
const {retrieveKeys, } = require('./apiKeys');
const {startArticles,} = require('./articles/article-main.js');
const {startFriends,} = require('./friends/friendMain.js');
const { pressEnterMessageButtonEvent, } = require('./message/messageEvent');

const startApp = () => {
  retrieveKeys();
  authEvents();
  startArticles();
  startFriends();
  pressEnterMessageButtonEvent();
};

startApp();
