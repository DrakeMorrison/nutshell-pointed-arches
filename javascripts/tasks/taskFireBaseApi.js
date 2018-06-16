const { getConfig, getUID, } = require('./../firebaseApi.js');

const saveNewTasks = (newTasks) => {
  newTasks.uid = getUID();
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
    const uid = getUID();
    $.ajax({
      method: 'GET',
      url: `${getConfig().databaseURL}/tasks.json?orderBy="uid"&equalTo="${uid}"`,
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

// const deleteTaskFromDb = (writeTaskId) => {
//   return new Promise((resolve, reject) => {
//     $.ajax({
//       method: 'DELETE',
//       url: `${getConfig().databaseURL}/tasks/${writeTaskId}.json`,
//     })
//       .done(() => {
//         resolve();
//       })
//       .fail((error) => {
//         reject(error);
//       });
//   });
// };

module.exports = {
  saveNewTasks,
  getAllTasks,
};
