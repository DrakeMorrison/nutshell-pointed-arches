// Author: Drake Morrison
// Purpose: Manage the DOM events for the Friends feature
'use strict';

const {getUsers, sendFriendRequest, getFriends, updateFriendRequest, deleteFriend,} = require('./friendFirebaseAPI.js');
const {printFriends, showFriends,} = require('./friendDom.js');
const {getUID,} = require('./../firebaseApi.js');

function addFriendEvent () {
  $('#add-friend-btn').click(function (e) {
    getUsers().then(function (results) {
      printFriends(results, getUID());
    }).catch(console.error.bind(console));
  });
}

function friendRequestEvent () {
  $(document).on('click', '.friend-request-btn', function (e) {
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

function acceptFriend () {
  $(document).on('click', '.accept-friend', function (e) {
    const newFriend = {
      'userUid': `${getUID()}`,
      'friendUid': `${e.target.dataset.useruid}`,
      'isAccepted': true,
      'isPending': false,
    };

    const oldFriend = {
      'userUid': `${e.target.dataset.useruid}`,
      'friendUid': `${getUID()}`,
      'isAccepted': true,
      'isPending': false,
    };

    Promise.all([sendFriendRequest(newFriend), updateFriendRequest(oldFriend, e.target.dataset.id),]).then(function () {
      refreshFriends();
    }).catch(console.error.bind(console));
  });
}

function rejectFriend () {
  $(document).on('click', '.reject-friend', function (e) {
    deleteFriend(e.target.dataset.id).then(function () {
      refreshFriends();
    }).catch(console.error.bind(console));
  });
}

function unFriend () {
  $(document).on('click', '.unfriend-btn', function (e) {
    Promise.all([deleteFriend(e.target.dataset.friendId), deleteFriend(e.target.dataset.userId),]).then(function () {
      refreshFriends();
    }).catch(console.error.bind(console));
  });
}

module.exports = {
  addFriendEvent,
  refreshFriends,
  acceptFriend,
  rejectFriend,
  unFriend,
  friendRequestEvent,
};
