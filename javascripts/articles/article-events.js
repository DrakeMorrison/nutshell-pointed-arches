// const firebaseApi = require('./article-firebaseApi');
const {saveArticle,} = require('./../firebaseApi.js');
const modalBtn = () => {
  $('#newArticle-btn').click((e) => {
    // e.preventDefault();
    console.error('btn clicked');
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
      })
      .catch((error) => {
        console.error('error in saving movie', error);
      });
  });
};

module.exports = {
  modalBtn,
  saveArticleEvent,
};
