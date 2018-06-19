const {exposeTask,} = require('./tasks/taskMain.js');
const {getAllArticlesEvent,} = require('./articles/article-events.js');
const {refreshFriends,} = require('./friends/friendEvents.js');
const {eventsInitializer,} = require('./events/eventsMain.js');

function initializer () {
  exposeTask();
  getAllArticlesEvent();
  refreshFriends();
  eventsInitializer();
}

module.exports = {
  initializer,
};
