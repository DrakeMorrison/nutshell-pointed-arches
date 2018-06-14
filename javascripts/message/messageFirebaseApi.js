/* eslint camelcase: 0 */

const pressEnterMessageButtonEvent = () => {
  $(document).keypress((e) => {
    if (e.key === 'Enter' && $('#messageField').hasClass('showMe')) {
      const createMessage = $('#createMessage-btn').val().replace(' ', '%20');

      showMessageResult(createMessage);
    }
  });
};

module.exports = {
  pressEnterMessageButtonEvent,
};
