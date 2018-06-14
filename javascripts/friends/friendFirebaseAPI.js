// Author: Drake Morrison
// Purpose: Handle CRUD with the Firebase API
'use strict';

const {getConfig,} = require('./../firebaseApi.js');

function getFriends () {
  const allFriends = [];
  return new Promise(function (resolve, reject) {
    $.ajax({
      method: 'GET',
      url: `${getConfig().databaseURL}/users.json`,
    })
      .done(function (allFriendsObj) {
        if (allFriendsObj !== null) {
          Object.keys(allFriendsObj).forEach(function (key) {
            allFriendsObj[key].id = key;
            allFriends.push(allFriendsObj[key]);
          });
        }
        resolve(allFriends);
      })
      .fail(function (error) {
        reject(error);
      });
  });
}

module.exports = {
  getFriends,
};
