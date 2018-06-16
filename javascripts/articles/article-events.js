const articleFirebaseApi = require('./article-firebaseApi');
const {saveArticle,} = require('./../firebaseApi.js');
const {domStringArticles,} = require('./article-dom.js');
const {getUID,} = require('./../firebaseApi.js');
const {getConfig,} = require('./../firebaseApi.js');

const modalBtn = () => {
  $('#newArticle-btn').click((e) => {
    // e.preventDefault();
    $('.article-form').removeClass('hide');
  });
};
const saveArticleEvent = () => {
  $(document).on('click', '.saveArticle-btn', (e) => {
    const articleToAddForm = $(e.target).closest('.article-form');
    const ArticleToAdd = {
      title: articleToAddForm.find('.article-title').val(),
      synopsis: articleToAddForm.find('.article-synopsis').val(),
      url: articleToAddForm.find('.article-url').val(),
    };
    saveArticle(ArticleToAdd)
      .then(() => {
        $('.article-title, .article-synopsis, .article-url').val('');
        $('.article-form').addClass('hide');
        getAllArticlesEvent();
      })
      .catch((error) => {
        console.error('error in saving movie', error);
      });
  });
};

const megaSmash = (articleArray, friendsArray) => {
  const articles = [];
  return Promise.all([articleArray, friendsArray,])
    .then((results) => {
      results[0].forEach((article) => {
        results[1].forEach((friend) => {
          if ((((getUID() === friend.friendUid) && (friend.userUid === article.uid)) && friend.isAccepted === true) || (((getUID() === friend.userUid) && (friend.friendUid === article.uid)) && friend.isAccepted === true)) {
            if (!articles.includes(article)) {
              articles.push(article);
            }
          }
        });
      });
      return Promise.resolve(articles);
    });
};

function getFriendsOnly () {
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
}

const getAllArticlesEvent = () => {

  megaSmash(articleFirebaseApi.getAllArticles(), getFriendsOnly()).then((friendsArticles) => {
    articleFirebaseApi.getAllSavedArticles()
      .then((articlesArray) => {
        domStringArticles([...articlesArray, ...friendsArticles,], 'savedArticlesDiv');
      })
      .catch((error) => {
        console.error('error in get all articles event', error);
      });
  });
};

const deleteArticleFromFirebase = () => {
  $(document).on('click', '.deleteArticleFromCollectionEvent', (e) => {
    const movieToDeleteId = $(e.target).closest('.articleCard').data('firebaseId');
    articleFirebaseApi.deleteArticleFromDatabase(movieToDeleteId)
      .then(() => {
        getAllArticlesEvent();
      })
      .catch((error) => {
        console.error('error from delete article', error);
      });
  });
};

module.exports = {
  modalBtn,
  saveArticleEvent,
  getAllArticlesEvent,
  deleteArticleFromFirebase,
};
