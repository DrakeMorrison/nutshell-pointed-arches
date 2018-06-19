const {getUID,} = require('./../firebaseApi.js');
const {getConfig,} = require('./../firebaseApi.js');

const megaSmash = (articleArray, friendsArray) => {
  const articles = [];
  return Promise.all([articleArray, friendsArray,])
    .then((results) => {
      results[0].forEach((article) => {
        results[1].forEach((friend) => {
          if ((((getUID() === friend.userUid) && (friend.friendUid === article.uid)) && friend.isAccepted === true)) {
            if (!articles.includes(article)) {
              articles.push(article);
            }
          }
        });
      });
      return Promise.resolve(articles);
    });
};

function getAllUsers () {
  const allFriends = [];
  return new Promise(function (resolve, reject) {
    $.ajax({
      method: 'GET',
      url: `${getConfig().databaseURL}/friends.json`,
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
};

module.exports = {
  megaSmash,
  getAllUsers,
};
