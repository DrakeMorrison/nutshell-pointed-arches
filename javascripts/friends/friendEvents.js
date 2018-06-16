// Author: Drake Morrison
// Purpose: Manage the DOM events for the Friends feature
'use strict';

const {getUsers, sendFriendRequest, getFriends,} = require('./friendFirebaseAPI.js');
const {printFriends, showFriends,} = require('./friendDom.js');
const {getUID,} = require('./../firebaseApi.js');

function addFriendEvent () {
  $('#add-friend-btn').click(function (e) {
    getUsers().then(function (results) {
      printFriends(results, getUID());
      friendRequestEvent();
    }).catch(console.error.bind(console));
  });
}

function friendRequestEvent () {
  $('.friend-request-btn').click(function (e) {
    // show alert for UX
    // make new Friend Object with current user as uid
    const newFriend = {
      'userUid': `${getUID()}`,
      'friendUid': `${e.target.dataset.friendUid}`,
      'isAccepted': false,
      'isPending': true,
    };
    sendFriendRequest(newFriend).then(alert('Request Sent!')).catch(console.error.bind(console));
  });
}

function refreshFriends () {
  getFriends().then(function (results) {
    showFriends(results);
  }).catch(console.error.bind(console));
}

module.exports = {
  addFriendEvent,
  friendRequestEvent,
  refreshFriends,
};
