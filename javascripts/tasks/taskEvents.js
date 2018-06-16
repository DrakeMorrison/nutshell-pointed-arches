const {saveNewTasks, getAllTasks,} = require('./taskFirebaseApi');
const taskDom = require('./taskDom');

const newTask = () => {
  $(document).on('click', '.new', (e) => {
    // alert('newTask');
    $('#taskForm').removeClass('hide');
    // saveNewTasks(writeTask);
  });
};

const saveTaskEvent = () => {
  $(document).on('click', '', (e) => {
    const eventCardToAdd = $(e.target).closest('.tasksBox');
    const eventToAdd = {
      task: eventCardToAdd.find('.task').text(),
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
      taskDom.domString(allTasksArray, 'taskContainer');
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
