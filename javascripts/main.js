const {authEvents,} = require('./events');
const {modalBtn,} = require('./articles/article-events');
const { retrieveKeys, } = require('./apiKeys');

const initializer = () => {
  retrieveKeys();
  authEvents();
  modalBtn();
};

initializer();
