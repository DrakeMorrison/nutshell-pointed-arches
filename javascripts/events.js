const authEvents = () => {

  $('#signin-btn').click((e) => {
    e.preventDefault();
    const email = $('#inputEmail').val();
    const pass = $('#inputPassword').val();
    firebase.auth().signInWithEmailAndPassword(email, pass)

      .catch((error) => {
        $('#singin-error-msg').text(error.message);
        $('#signin-error').removeClass('hide');
        const errorMessage = error.message;
        console.error(errorMessage);
      });
  });

  $('#register-btn').click(() => {
    const email = $('#registerEmail').val();
    const pass = $('#registerPassword').val();
    firebase.auth().createUserWithEmailAndPassword(email, pass)
      .catch((error) => {
        // Handle Errors here.
        $('#register-error-msg').tex(error.message);
        $('#register-error').removeClass('hide');
        const errorMessage = error.message;
        console.error(errorMessage);
        // ...
      });
  });

  $('#register-link').click(() => {
    $('#login-form').addClass('hide');
    $('#registration-form').removeClass('hide');
  });

  $('#signin-link').click(() => {
    $('#login-form').removeClass('hide');
    $('#registration-form').addClass('hide');
  });

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
