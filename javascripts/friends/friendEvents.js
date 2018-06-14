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

module.exports = {
  addFriendEvent,
};
