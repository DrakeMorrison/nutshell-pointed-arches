const {exposeTask,} = require('./tasks/taskMain.js');
const {getAllArticlesEvent,} = require('./articles/article-events.js');

function initializer () {
  exposeTask();
  getAllArticlesEvent();
}

module.exports = {
  initializer,
};
