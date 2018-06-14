// Author: Drake Morrison
// Purpose: To start the Friend List feature
'use strict';

const {addFriendEvent,} = require('./friendEvents.js');

function startFriends () {
  addFriendEvent(); // event listener for adding a new friend
}

module.exports = {
  startFriends,
};
