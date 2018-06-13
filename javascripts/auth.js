const { setUID, } = require('./firebaseApi');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUID(user.uid);
      $('#authScreen').addClass('hide');
      $('#logout-btn').removeClass('hide');
      $('#authenticate').addClass('hide');
    } else {
      $('#authScreen').removeClass('hide');
      $('#logout-btn').addClass('hide');
      $('#authenticate').removeClass('hide');

    }
  });
};

module.exports = {
  checkLoginStatus,
};
