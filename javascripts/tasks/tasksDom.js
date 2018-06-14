const domString = (taskArray, whereToPrint) => {
  let taskString = '';
  taskArray.forEach((tasks) => {
    taskString += `<div class="row">`;
    taskString += `<button class="btn btn-default">New Task</button>`;
    taskString += `<div class="thumbnail tasksBox">`;
    taskString += `<p class="task">${tasks.task}</p>`;
    taskString += `</div>`;
    taskString += `</div>`;
  });
  printToDom(whereToPrint, taskString);
};

const printToDom = (whereToPrint, stringz) => {
  $(`#${whereToPrint}`).html(stringz);
};

module.exports = {
  domString,
};
