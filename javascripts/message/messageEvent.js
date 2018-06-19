/* eslint camelcase: 0 */
const { saveMessage, getAllMessages, deleteMessageFromDb, updateMessageFromDb, } = require('./../message/messageFirebaseApi.js');
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
        timestamp: new Date($.now()),
        isEdited: false,
      };
      saveMessage(message)
        .then(getAllMessagesEvent())
        .catch(() => {
          console.error;
        }
        );
      EmptymessagesInField();

    }
  });

  $(document).on('click', '#createMessage-btn', () => {
    const messagesInField = $('#messageField').val();
    const uid = getUID();
    //  const time = e.getTime();
    const message = {
      userUid: uid,
      message: messagesInField,
      timestamp: new Date($.now()),
      isEdited: false,
    };
    saveMessage(message)
      .then(getAllMessagesEvent())
      .catch(() => {
        console.error;
      }
      );
    EmptymessagesInField();
    //  getAllMessagesEvent();
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
  editMessage();

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

const editMessage = () => {
  $(document).on('click', '.edit', (e) => {

    const messageCard = e.target.parentNode.parentNode;
    const messageContent = messageCard.children[0];
    const cardEntryText = messageContent.innerHTML;
    const editTextareEl = document.createElement('textarea');
    editTextareEl.setAttribute('class', 'edit-textarea');
    editTextareEl.value = cardEntryText;
    messageContent.replaceWith(editTextareEl, cardEntryText);

  });
  saveMessageFromFirebase();
};

  // showInputFields(messageToEditText);

  // const showInputFields = (message1) => {

const saveMessageFromFirebase = () => {

  $(document).on('click', '.save', (e) => {
    const messageCard = e.target.parentNode.parentNode;
    const messageContent = messageCard.children[0];
    const messageToEditId = $(e.target).closest('.message').data('firebaseid');
    const updatedContent = {
      message: messageContent.value,
      isEdited: true,
      timestamp: new Date($.now()),
    };

    updateMessageFromDb(updatedContent, messageToEditId)
      .then(() => {
        getAllMessagesEvent();
      })
      .catch((error) => {
        console.error('error from delete message', error);
      });
  });
};
// const messageTimeStamp = (e) => {
//   e.timestamp;
// };

module.exports = {
  pressEnterMessageButtonEvent,

};
