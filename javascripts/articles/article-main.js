const {modalBtn,} = require('./article-events');
const {saveArticleEvent,} = require('./article-events');
// const {getAllArticlesEvent,} = require('./article-events');
const {deleteArticleFromFirebase,} = require('./article-events');
function startArticles () {
  modalBtn();
  saveArticleEvent();
  // getAllArticlesEvent();
  deleteArticleFromFirebase();
}

module.exports = {
  startArticles,
};
