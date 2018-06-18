/* eslint camelcase: 0 */
const { saveMessage, getAllMessages, deleteMessageFromDb, } = require('./../message/messageFirebaseApi.js');
const {domString, } = require('./../message/messageDom.js');
const {getUID, } = require('./../firebaseApi.js');

const pressEnterMessageButtonEvent = () => {
  $(document).keypress((e) => {
    // const time = e.getTime();
    if (e.key === 'Enter' && $('#messageField:focus')) {
      const messagesInField = $('#messageField').val();
      const uid = getUID();
      const message = {
        userUid: uid,
        message: messagesInField,
        timestamp: 12345,
        isEdited: false,
      };
      saveMessage(message);
      EmptymessagesInField();
      getAllMessagesEvent();
    }
  });

  $(document).on('click', '#createMessage-btn', () => {
    const messagesInField = $('#messageField').val();
    const uid = getUID();
    //  const time = e.getTime();
    const message = {
      userUid: uid,
      message: messagesInField,
      timestamp: 12345,
      isEdited: false,
    };
    saveMessage(message);
    EmptymessagesInField();
    getAllMessagesEvent();
  });
};

const EmptymessagesInField = () => {
  $('#messageField').val('');
};

const getAllMessagesEvent = () => {
  getAllMessages()
    .then((messageArray) => {
      domString(messageArray, '#printHere');
    })
    .catch((error) => {
      console.error('error in get all messages', error);
    });
};

$(document).ready(function () {
  getAllMessagesEvent();
});

$(document).on('click', '.message', (e) => {
  const messageToTarget = $(e.target).find('.btn');
  messageToTarget.removeClass('hide');
  deleteMessageFromFirebase();
});

const deleteMessageFromFirebase = () => {
  $(document).on('click', '.delete', (e) => {
    const messageToDeleteId = $(e.target).closest('.message').data('firebaseid');
    deleteMessageFromDb(messageToDeleteId)
      .then(() => {
        getAllMessagesEvent();
      })
      .catch((error) => {
        console.error('error from delete message', error);
      });
  });
};

// const messageButtonFunctions = () => {

// }

module.exports = {
  pressEnterMessageButtonEvent,

};
