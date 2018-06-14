// Author: Drake Morrison
// Purpose: To start the Friend List feature
'use strict';

const {addFriendEvent,} = require('./friendEvents.js');

function startFriends () {
  addFriendEvent();
}

module.exports = {
  startFriends,
};
