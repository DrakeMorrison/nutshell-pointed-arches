const modalBtn = () => {
  $('#newArticle-btn').click((e) => {
    // e.preventDefault();
    console.error('btn clicked');
    $('.article-form').removeClass('hide');
  });
};

module.exports = {
  modalBtn,
};
