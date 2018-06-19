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
    acceptFriend();
    rejectFriend();
    unFriend();
  }).catch(console.error.bind(console));
}

function acceptFriend () {
  $(document).on('click', '.accept-friend', function (e) {
    // send new friend object to friends collection
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
    }).catch(console.error.bind);
  });
}

function rejectFriend () { // delete friend request from firebase
  $(document).on('click', '.reject-friend', function (e) {
    deleteFriend(e.target.dataset.id).then(function () {
      refreshFriends();
    }).catch(console.error.bind(console));
  });
}

function unFriend () {}

module.exports = {
  addFriendEvent,
  friendRequestEvent,
  refreshFriends,
};
