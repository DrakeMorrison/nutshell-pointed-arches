const {getUID,} = require('./../firebaseApi.js');
const {getConfig,} = require('./../firebaseApi.js');

const getAllSavedArticles = () => {
  return new Promise((resolve, reject) => {
    const allArticlesArray = [];
    $.ajax({
      method: 'GET',
      url: `${getConfig().databaseURL}/articles.json?orderBy="uid"&equalTo="${getUID()}"`,
    })
      .done((allArticlesObject) => {
        if (allArticlesObject !== null) {
          Object.keys(allArticlesObject).forEach((fbKey) => {
            allArticlesObject[fbKey].id = fbKey;
            allArticlesArray.push(allArticlesObject[fbKey]);
          });
        }
        resolve(allArticlesArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const deleteArticleFromDatabase = (articleId) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'DELETE',
      url: `${getConfig().databaseURL}/articles/${articleId}.json`,
    })
      .done(() => {
        resolve();
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const getAllArticles = () => {
  return new Promise((resolve, reject) => {
    const allArticlesArray = [];
    $.ajax({
      method: 'GET',
      url: `${getConfig().databaseURL}/articles.json`,
    })
      .done((allArticlesObject) => {
        if (allArticlesObject !== null) {
          Object.keys(allArticlesObject).forEach((fbKey) => {
            allArticlesObject[fbKey].id = fbKey;
            allArticlesArray.push(allArticlesObject[fbKey]);
          });
        }
        resolve(allArticlesArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

module.exports = {
  getAllSavedArticles,
  deleteArticleFromDatabase,
  getAllArticles,
};
