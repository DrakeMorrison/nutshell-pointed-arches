// Author: Drake Morrison
// Purpose: Manage the DOM events for the Friends feature
'use strict';

const {getFriends,} = require('./friendFirebaseAPI.js');
const {printFriends,} = require('./friendDom.js');
const {getUID,} = require('./../firebaseApi.js');

function addFriendEvent () {
  $('#add-friend-btn').click(function (e) {
    getFriends().then(function (results) {
      printFriends(results, getUID());
    }).catch(console.error.bind(console));
  });
}

function friendRequestEvent () {
  $('.friend-request-btn').click(function (e) {
    // show alert for UX
    // make new Friend Object with current user as uid
  });
}

module.exports = {
  addFriendEvent,
  friendRequestEvent,
};
