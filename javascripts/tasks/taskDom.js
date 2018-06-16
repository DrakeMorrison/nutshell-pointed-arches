const domString = (tasksArray, whereToPrint) => {
  let taskString = '';
  tasksArray.forEach((writeTask) => {
    taskString += `<div class="row">`;
    taskString += `<div class="col-sm-12">`;
    taskString +=   `<div class="thumbnail checkbox tasksBox">`;
    taskString +=    `<p class="task">${writeTask.task}</p>`;
    taskString +=  `</div>`;
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
