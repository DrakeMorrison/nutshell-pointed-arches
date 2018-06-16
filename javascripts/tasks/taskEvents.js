const { saveNewTasks, getAllTasks, } = require('./taskFirebaseApi');
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
      isCompleted: true,
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
    $(e.target).closest('.taskHolder').data('firebaseId');
    // const deleteTaskId =
    // deleteTaskFromDb(deleteTaskId)
    // .then(() => {
    //   getAllTaskEvent();
    // })
    // .catch((error) => {
    //   console.error(error.message);
    // });
  });
};

const initializer = () => {
  newTask();
  saveTaskEvent();
  getAllTaskEvent();
  deleteTaskFromFirebase();
};

module.exports = {
  initializer,
};
