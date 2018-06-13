const authEvents = () => {

  $('#logout-btn').click(() => {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.

    }).catch((error) => {
      // An error happened.
      console.error(error);
    });
  });
};

module.exports = {
  authEvents,
};
