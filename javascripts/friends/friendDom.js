// Author: Drake Morrison
// Purpose: manage the DOM with functions
'use strict';

function printFriends (input, uid) {
  let str = '';
  $(function () {
    $('[data-toggle="popover"]').popover();
  });
  input.forEach(friend => {
    if (friend.uid !== uid) {
      str += `<li><a class='friend-request-btn' tabindex="0" role="button" data-toggle="popover" data-placement="right" data-trigger="hover" title="${friend.email}" data-friend-id="${friend.id}" data-friend-uid="${friend.uid}" data-container="body" data-content="Send Request?">${friend.email}</a></li>`;
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
