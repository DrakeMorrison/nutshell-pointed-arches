const { setUID, } = require('./firebaseApi');
const { getAllArticlesEvent, } = require('./articles/article-events.js');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUID(user.uid);
      // uidArticle(user.uid);
      $('#authorization').addClass('hide');
      $('#logout-btn').removeClass('hide');
      $('#authenticate').addClass('hide');
      $('#nutshell').removeClass('hide');
      $('#username').html(user.email);
      $('#username').removeClass('hide');
      getAllArticlesEvent();
      startFriends();
      startArticles();
      exposeTask();
    } else {
      $('#authorization').removeClass('hide');
      $('#logout-btn').addClass('hide');
      $('#authenticate').removeClass('hide');
      $('#nutshell').addClass('hide');
      $('#username').addClass('hide');
    }
  });
};

module.exports = {
  checkLoginStatus,
  // uidArticle,
};
