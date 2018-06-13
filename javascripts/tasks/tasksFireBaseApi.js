let firebaseConfig = {};
// let uid = '';

const setConfig = (fbConfig) => {
  firebaseConfig = fbConfig;
};

// const setUID = (newUID) => {
//   uid = newUID;
// };

const saveNewTask = (newTask) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'POST',
      url: `${firebaseConfig.databaseURL}/tasks.json`,
      data: JSON.stringify(newTask),
    })
      .done(() => {
        resolve();
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
  saveNewTask,
};
