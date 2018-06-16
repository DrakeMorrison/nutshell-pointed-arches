const articleFirebaseApi = require('./article-firebaseApi');
const {saveArticle,} = require('./../firebaseApi.js');
const {domStringArticles,} = require('./article-dom.js');
const {megaSmash,} = require('./article-friendsArticles.js');
const {getAllUsers,} = require('./article-friendsArticles.js');

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

const getAllArticlesEvent = () => {
  megaSmash(articleFirebaseApi.getAllArticles(), getAllUsers()).then((friendsArticles) => {
    articleFirebaseApi.getAllUsersArticles()
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
