const domStringArticles = (arrayArticles, whereToPrint) => {
  let strang = '';
  arrayArticles.forEach(article => {
    strang += `<div class="list-group articleCard" data-firebase-id="${article.id}">`;
    strang +=   `<a href="${article.url}" class="list-group-item">`;
    strang +=     `<span class="deleteArticleFromCollectionEvent pull-right">X</span>`;
    strang +=     `<h4 class="list-group-item-heading">${article.title}</h4>`;
    strang +=     `<p class="list-group-item-text">${article.synopsis}</p>`;
    strang +=   `</a>`;
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
