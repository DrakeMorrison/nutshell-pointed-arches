/* eslint camelcase: 0 */
const {showMessageResult, } = require('./messgage/message.js');

const pressEnterMessageButtonEvent = () => {
  $(document).keypress((e) => {
    if (e.key === 'Enter' && $('#messageField').hasClass('showMe')) {
      const messagesInField = $('#createMessage-btn').val();

      createMessages(messagesInField);
    }
  });
};

// const getAllMoviesEvent = () => {
//   firebaseApi.getAllMovies()
//     .then((moviesArray) => {
//       dom.domString(moviesArray, tmdb.getImageConfig(), 'savedMovies', true);
//     })
//     .catch((error) => {
//       console.error('error in get all movies', error);
//     });
// };

const saveMovieToWishlistEvent = () => {
  $(document).on('click', '.addMovieToWishlist', (e) => {
    const movieToAddCard = $(e.target).closest('.movie');
    const movieToAdd = {
      message: movieToAddCard.find('.movie-title').text(),

    };
    firebaseApi.saveMovieToWishlist(movieToAdd)
      .then(() => {
        movieToAddCard.remove();
      })
      .catch((error) => {
        console.error('error in saving movie', error);
      });
  });
};

module.exports = {
  pressEnterMessageButtonEvent,
};
