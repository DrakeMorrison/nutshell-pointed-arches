// Author: Drake Morrison
// Purpose: Handle CRUD with the Firebase API
'use strict';

const {getConfig, getUID,} = require('./../firebaseApi.js');

function getUsers () {
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

function sendFriendRequest (newFriend) {
  return new Promise(function (resolve, reject) {
    $.ajax({
      method: 'POST',
      url: `${getConfig().databaseURL}/friends.json`,
      data: JSON.stringify(newFriend),
    })
      .done(function (uniqueKey) {
        resolve(uniqueKey);
      })
      .fail(function (error) {
        reject(error);
      });
  });
}

function getFriends () {
  const allFriends = [];
  return new Promise(function (resolve, reject) {
    $.ajax({
      method: 'GET',
      url: `${getConfig().databaseURL}/friends.json?orderBy="friendUid"&equalTo="${getUID()}"`,
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

function findEmailByUID (uid) {
  const allUsers = [];
  return new Promise(function (resolve, reject) {
    $.ajax({
      method: 'GET',
      url: `${getConfig().databaseURL}/users.json?orderBy="uid"&equalTo="${uid}"`,
    })
      .done(function (allFriendsObj) {
        if (allFriendsObj !== null) {
          Object.keys(allFriendsObj).forEach(function (key) {
            allFriendsObj[key].id = key;
            allUsers.push(allFriendsObj[key]);
          });
        }
        resolve(allUsers[0]);
      })
      .fail(function (error) {
        reject(error);
      });
  });
}

module.exports = {
  getUsers,
  sendFriendRequest,
  getFriends,
  findEmailByUID,
};
