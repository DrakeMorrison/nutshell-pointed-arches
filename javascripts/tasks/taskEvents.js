const taskFirebaseApi = require('./taskFirebaseApi');

const saveTaskEvent = () => {
  $(document).on('click', '.newTask', (e) => {
    const eventCardToAdd = $(e.target).closet('.tasksBox');
    const eventToAdd = {
      task: eventCardToAdd.find('.task').text(),
    };
    taskFirebaseApi.saveNewTasks(eventToAdd)
      .then(() => {
        eventCardToAdd.remove();
      })
      .catch((error) => {
        console.error(error.message);
      });
  });
};

const initializer = () => {
  saveTaskEvent();
};

module.exports = {
  initializer,
};
