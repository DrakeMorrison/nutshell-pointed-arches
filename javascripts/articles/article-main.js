const {modalBtn,} = require('./article-events');
const {saveArticleEvent,} = require('./article-events');
const {deleteArticleFromFirebase,} = require('./article-events');
function startArticles () {
  modalBtn();
  saveArticleEvent();
  deleteArticleFromFirebase();
}

module.exports = {
  startArticles,
};
