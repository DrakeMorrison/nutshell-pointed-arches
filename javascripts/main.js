const {authEvents,} = require('./events');
const {retrieveKeys, } = require('./apiKeys');
const {startArticles,} = require('./articles/article-main.js');
const {startFriends,} = require('./friends/friendMain.js');
const startApp = () => {
  retrieveKeys();
  authEvents();
  startArticles();
  startFriends();
};

startApp();
