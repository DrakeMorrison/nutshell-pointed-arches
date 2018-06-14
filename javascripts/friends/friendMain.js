// Author: Drake Morrison
// Purpose: To start the Friend List feature
'use strict';

const {addFriendEvent, friendRequestEvent,} = require('./friendEvents.js');

function startFriends () {
  addFriendEvent();
  friendRequestEvent();
}

module.exports = {
  startFriends,
};
