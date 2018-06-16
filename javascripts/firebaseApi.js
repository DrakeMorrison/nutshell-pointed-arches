let firebaseConfig = {};
let uid = '';

const setConfig = (fbConfig) => {
  firebaseConfig = fbConfig;
};

const setUID = (newUID) => {
  uid = newUID;
};

const getConfig = () => {
  return firebaseConfig;
};

const getUID = () => {
  return uid;
};

module.exports = {
  setConfig,
  setUID,
  getUID ,
  getConfig,
};
