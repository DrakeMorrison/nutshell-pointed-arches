const {authEvents,} = require('./events');
const {retrieveKeys, } = require('./apiKeys');
const {startFriends,} = require('./friends/friendMain.js');
const {startArticles,} = require('./articles/article-main.js');

const initializer = () => {
  retrieveKeys();
  authEvents();
  startFriends();
  startArticles();
};

initializer();
