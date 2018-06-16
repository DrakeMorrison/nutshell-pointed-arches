const firebaseApi = require('./firebaseApi');
const { checkLoginStatus, } = require('./auth');

const apiKeys = () => {
  return new Promise((resolve, reject) => {
    $.ajax('../db/apiKeys.json')
      .done((data) => {
        resolve(data);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const retrieveKeys = () => {
  return new Promise ((resolve, reject) => {
    apiKeys()
      .then((results) => {
        firebaseApi.setConfig(results.firebase);
        firebase.initializeApp(results.firebase);
        checkLoginStatus();
        resolve();
      })
      .catch((err) => {
        console.error('no keys:', err);
      });
  });
};

module.exports = {
  retrieveKeys,
};
