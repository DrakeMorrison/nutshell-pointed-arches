const { initializer, } = require('./taskEvents');

function exposeTask () {
  initializer();
};

module.exports = {
  exposeTask,
};
