const {modalBtn,} = require('./article-events');
const {saveArticleEvent,} = require('./article-events');
function startArticles () {
  modalBtn();
  saveArticleEvent();
}

module.exports = {
  startArticles,
};
