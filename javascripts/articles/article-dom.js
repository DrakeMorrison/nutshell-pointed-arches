const {getUID,} = require('./../firebaseApi.js');

const domStringArticles = (arrayArticles, whereToPrint) => {
  let strang = '';
  arrayArticles.forEach(article => {
    strang += `<div class="list-group articleCard" data-firebase-id="${article.id}">`;
    strang +=   `<div class="list-group-item">`;
    console.error(getUID);
    console.error(arrayArticles.uid);
    if (getUID() === article.uid) {
      strang +=     `<span class="deleteArticleFromCollectionEvent pull-right">X</span>`;
    }

    strang +=     `<a target="_blank" href="${article.url}">`;
    strang +=       `<h4 class="list-group-item-heading">${article.title}</h4>`;
    strang +=       `<p class="list-group-item-text">${article.synopsis}</p>`;
    strang +=     `</a>`;
    strang +=   `</div>`;
    strang += `</div>`;
  });
  printToDom(whereToPrint, strang);
};

const printToDom = (whereToPrint, stringz) => {
  $(`#${whereToPrint}`).html(stringz);
};

module.exports = {
  domStringArticles,
};
