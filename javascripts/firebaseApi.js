let firebaseConfig = {};
let uid = '';

const setConfig = (fbConfig) => {
  firebaseConfig = fbConfig;
};

const setUID = (newUID) => {
  uid = newUID;
};

const getConfig = () => firebaseConfig;

const getUID = () => uid;

const saveUser = (input) => {
  const newUser = {
    'uid': input.uid,
    'email': input.email,
  };
  return new Promise(function (resolve, reject) {
    $.ajax({
      method: 'POST',
      url: `${firebaseConfig.databaseURL}/users.json`,
      data: JSON.stringify(newUser),
    })
      .done(function (uniqueKey) {
        resolve(uniqueKey);
      })
      .fail(function (error) {
        reject(error);
      });
  });
};

module.exports = {
  setConfig,
  setUID,
  saveUser,
  getConfig,
  getUID,
};
