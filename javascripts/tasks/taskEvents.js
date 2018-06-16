const {saveNewTasks, getAllTasks,} = require('./taskFirebaseApi');
const taskDom = require('./taskDom');

const newTask = () => {
  $(document).on('click', '.new', (e) => {
    $('#taskForm').removeClass('hide');
  });
};

const saveTaskEvent = () => {
  $(document).on('click', '', (e) => {
    const eventCardToAdd = $(e.target).closest('.tasksBox');
    const eventToAdd = {
      task: eventCardToAdd.find('.task').text(),
      isCompleted: true,
    };
    saveNewTasks(eventToAdd)
      .then(() => {
        eventCardToAdd.remove();
      })
      .catch((error) => {
        console.error(error.message);
      });
  });
};

const getAllTaskEvent = () => {
  getAllTasks()
    .then((allTasksArray) => {
      taskDom.domString('taskContainer', allTasksArray);
    })
    .catch((error) => {
      console.error(error.message);
    });
};

const initializer = () => {
  newTask();
  saveTaskEvent();
  getAllTaskEvent();
};

module.exports = {
  initializer,
};
