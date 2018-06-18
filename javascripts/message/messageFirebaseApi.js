const { getConfig,} = require('./../firebaseApi.js');
// const {setConfig, setUID, } = require('./../f')

const saveMessage = (newMessage) => {

  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'POST',
      url: `${getConfig().databaseURL}/messages.json`,
      data: JSON.stringify(newMessage),
    })
      .then((newMessageFirebaseUniqueKey) => {
        resolve(newMessageFirebaseUniqueKey);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getAllMessages = () => {
  // const uid = getUID();

  return new Promise((resolve, reject) => {
    const allMessagesArray = [];
    $.ajax({
      method: 'GET',
      url: `${getConfig().databaseURL}/messages.json`,
    })
      .done((allMessagesObj) => {
        if (allMessagesObj !== null) {
          Object.keys(allMessagesObj).forEach((fbKey) => {
            allMessagesObj[fbKey].id = fbKey;
            allMessagesArray.push(allMessagesObj[fbKey]);
          });
        }
        resolve(allMessagesArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const deleteMessageFromDb = (messageId) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'DELETE',
      url: `${getConfig().databaseURL}/messages/${messageId}.json`,
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
  saveMessage,
  getAllMessages,
  deleteMessageFromDb,
};
