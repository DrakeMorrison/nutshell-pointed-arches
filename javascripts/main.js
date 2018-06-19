const {authEvents,} = require('./events');
const {retrieveKeys, } = require('./apiKeys');
const {startArticles,} = require('./articles/article-main.js');
const { pressEnterMessageButtonEvent, } = require('./message/messageEvent');

const startApp = () => {
  retrieveKeys();
  authEvents();
  startArticles();
  pressEnterMessageButtonEvent();
};

startApp();
