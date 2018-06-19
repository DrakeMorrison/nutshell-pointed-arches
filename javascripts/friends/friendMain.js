// Author: Drake Morrison
// Purpose: To start the Friend List feature
'use strict';

const {addFriendEvent, acceptFriend, rejectFriend, unFriend, friendRequestEvent,} = require('./friendEvents.js');

function startFriends () {
  addFriendEvent();
  acceptFriend();
  rejectFriend();
  unFriend();
  friendRequestEvent();
}

module.exports = {
  startFriends,
};
