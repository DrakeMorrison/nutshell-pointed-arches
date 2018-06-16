// Author: Drake Morrison
// Purpose: manage the DOM with functions
'use strict';

const {findEmailByUID,} = require('./friendFirebaseAPI.js');

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
  array.forEach(function (friend) {
    if (friend.isPending === true) {
      findEmailByUID(friend.userUid).then(function (matchingFriend) {
        str += `<div class="thumbnail">`;
        str += `<div class="caption">`;
        str += `<h6 id='friend-request'>${matchingFriend.email} wants to be your friend!</h6>`;
        str += `<p><a href="#" class="btn btn-success" role="button">Accept</a> <a href="#" class="btn btn-danger" role="button">Reject</a></p>`;
        str += `</div>`;
        str += `</div>`;
        appendToDom(str, '#friends');
      }).catch(console.error.bind(console));
    }
  });
}

module.exports = {
  printFriends,
  showFriends,
};
