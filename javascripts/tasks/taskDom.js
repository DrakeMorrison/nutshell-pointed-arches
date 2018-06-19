// Author: Amanda Mitchell
// Purpose:

const domString = (whereToPrint, tasksArray) => {
  let taskString = '';
  tasksArray.forEach((writeTask) => {
    taskString += `<div class="row">`;
    taskString += `<div class="col-sm-12">`;
    taskString += `<div class="thumbnail tasksBox" data-firebase-id="${writeTask.id}">`;
    taskString += `<div class="taskCheckbox">`;
    taskString += `<label style="float:left">`;
    taskString += `<input type="checkbox">`;
    taskString += `</label>`;
    taskString += `</div>`;
    if (writeTask.isCompleted) {
      taskString += `<p class="task strikeThrough">${writeTask.task}</p>`;
    } else {
      taskString += `<p class="task">${writeTask.task}</p>`;
    }
    taskString += `<a class="btn deleteTask" style="float:right">X</a>`;
    taskString += `</div>`;
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
