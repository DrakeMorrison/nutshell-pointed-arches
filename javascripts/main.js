const {authEvents,} = require('./events');
const {retrieveKeys, } = require('./apiKeys');
const {startArticles,} = require('./articles/article-main.js');
const startApp = () => {
  retrieveKeys();
  authEvents();
  startArticles();
};

startApp();
