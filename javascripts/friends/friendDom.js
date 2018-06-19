// Author: Drake Morrison
// Purpose: manage the DOM with functions
'use strict';

const {findUserByUID,} = require('./friendFirebaseAPI.js');

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

function appendToDom (str, id) {
  $(id).append(str);
}

function showFriends (array) {
  let str = '';
  printToDom(str, '#friends');
  array.forEach(function (friend) {
    findUserByUID(friend.userUid).then(function (matchingFriend) {
      str += `<div class="thumbnail">`;
      str += `<div class="caption">`;
      if (friend.isPending === true) {
        str += `<h6>${matchingFriend.email} wants to be your friend!</h6>`;
        str += `<p><a class="btn btn-success accept-friend" data-userUid="${friend.userUid}" data-id="${friend.id}" role="button">Accept</a> <a class="btn btn-danger reject-friend" data-id="${friend.id}" role="button">Reject</a></p>`;
      } else if (friend.isAccepted === true) {
        str += `<h4>${matchingFriend.email}</h4>`;
        str += `<p><a class='btn btn-sm btn-danger unfriend-btn'>UnFriend</a></p>`;
      }
      str += `</div>`;
      str += `</div>`;
      appendToDom(str, '#friends');
    }).catch(console.error.bind(console));
  });
}

module.exports = {
  printFriends,
  showFriends,
};
