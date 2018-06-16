const {authEvents,} = require('./events');
const {retrieveKeys, } = require('./apiKeys');
const {startFriends,} = require('./friends/friendMain.js');
const {startArticles,} = require('./articles/article-main.js');
const {exposeTask,} = require('./tasks/taskMain.js');

const initializer = () => {
  retrieveKeys().then(() => {
    authEvents();
  });
};

initializer();
