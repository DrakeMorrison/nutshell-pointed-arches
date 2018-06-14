const eventsDom = require('./eventsDom');

const getEventsData = () => {
  return new Promise ((resolve, reject) => {
    $.ajax(`./db/events.json`)
      .done((data) => {
        resolve(data);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const displayEvent = (currentEvent) => {
  getEventsData(currentEvent)
    .then((result) => {
      eventsDom.domStrang(result);
    })
    .catch((error) => {
      console.error('nope no display event today', error);
    });
};

module.exports = {
  displayEvent,
};
