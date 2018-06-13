let firebaseConfig = {};
let uid = '';

const setConfig = (fbConfig) => {
  firebaseConfig = fbConfig;
};

const setUID = (newUID) => {
  uid = newUID;
};

module.exports = {
  setConfig,
  setUID,
  firebaseConfig,
  uid,
};
