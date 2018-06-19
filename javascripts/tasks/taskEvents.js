// Author: Amanda Mitchell
// Purpose:

const { saveNewTasks, getAllTasks, deleteTaskFromDb, updateTaskInDb, } = require('./taskFirebaseApi');
const taskDom = require('./taskDom');

const newTask = () => {
  $(document).on('click', '.new', (e) => {
    $('#taskForm').removeClass('hide');
  });
};

const saveTaskEvent = () => {
  $(document).on('click', '#saveTask', (e) => {
    const eventCardToAdd = $(e.target).closest('.taskHolder');
    const eventToAdd = {
      task: eventCardToAdd.find('#writeTask').val(),
      isCompleted: false,
    };
    saveNewTasks(eventToAdd)
      .then(() => {
        getAllTaskEvent();
        // eventCardToAdd.remove();
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

const deleteTaskFromFirebase = () => {
  $(document).on('click', '.deleteTask', (e) => {
    const deleteTaskId = $(e.target).closest('.tasksBox').data('firebaseId');
    deleteTaskFromDb(deleteTaskId)
      .then(() => {
        getAllTaskEvent();
      })
      .catch((error) => {
        console.error(error.message);
      });
  });
};

const updateTaskEvent = () => {
  $(document).on('click', '.taskCheckbox', (e) => {
    const updatedTaskId = $(e.target).closest('.tasksBox').data('firebaseId');
    const updatedTaskCard = $(e.target).closest('.tasksBox');
    const updatedTask = {
      task: updatedTaskCard.find('.task').text(),
      isCompleted: true,
    };
    updateTaskInDb(updatedTask, updatedTaskId)
      .then(() => {
        getAllTaskEvent();
      })
      .catch((error) => {
        console.error(error.message);
      });
  });
};

const initializer = () => {
  newTask();
  saveTaskEvent();
  getAllTaskEvent();
  deleteTaskFromFirebase();
  updateTaskEvent();
};

module.exports = {
  initializer,
};
