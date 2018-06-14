'use strict';

function printFriends (input, uid) {
  let str = '';
  input.forEach(friend => {
    if (friend.uid !== uid) {
      str += `<li><a data-friend-id="${friend.id}" data-friend-uid="${friend.uid}">${friend.email}</a></li>`;
    }
  });
  printToDom(str, '#friend-options');
}

function printToDom (str, id) {
  $(id).html(str);
}

module.exports = {
  printFriends,
};
