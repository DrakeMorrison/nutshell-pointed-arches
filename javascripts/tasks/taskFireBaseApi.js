const {getConfig,} = require('./../firebaseApi.js');

let firebaseConfig = {};
// let uid = '';

const setConfig = (fbConfig) => {
  firebaseConfig = fbConfig;
};

// const setUID = (newUID) => {
//   uid = newUID;
// };

const saveNewTasks = (newTasks) => {
  // newTasks.uid = uid;
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'POST',
      url: `${getConfig().databaseURL}/tasks.json`,
      data: JSON.stringify(newTasks),
    })
      .done((uniqueKey) => {
        resolve(uniqueKey);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const getAllTasks = () => {
  return new Promise((resolve, reject) => {
    const allTasksArray = [];
    $.ajax({
      method: 'GET',
      url: `${getConfig().databaseURL}/tasks.json`,
    })
      .done((allTasksObject) => {
        if (allTasksObject !== null) {
          Object.keys(allTasksObject).forEach((fbKey) => {
            allTasksObject[fbKey].id = fbKey;
            allTasksArray.push(allTasksObject[fbKey]);
          });
        }
        resolve(allTasksArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

module.exports = {
  setConfig,
  // setUID,
  firebaseConfig,
  // uid,
  saveNewTasks,
  getAllTasks,
};
