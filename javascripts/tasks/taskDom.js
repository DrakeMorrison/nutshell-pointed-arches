const domString = (taskArray, whereToPrint) => {
  let taskString = '';
  taskArray.forEach((tasks) => {
    taskString += `<div class="row">`;
    taskString += `<div class="col-sm-12">`;
    taskString += `<div class="thumbnail checkbox tasksBox">`;
    taskString += `<p class="task">${tasks.task}</p>`;
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
