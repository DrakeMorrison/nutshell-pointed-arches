const mainFirebaseApi = require('../firebaseApi');

const createEvent = (newEvent) => {
  return new Promise ((resolve, reject) => {
    $.ajax({
      method: 'POST',
      url: `${mainFirebaseApi.getConfig().databaseURL}/events.json`,
      data: JSON.stringify(newEvent),
    })
      .done((newEventData) => {
        resolve(newEventData);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const getEventsData = () => {
  return new Promise ((resolve, reject) => {
    const eventsArray = [];
    const config = mainFirebaseApi.getConfig();
    $.ajax({
      method: 'GET',
      url: `${config.databaseURL}/events.json`,
    })
      .done((eventsObject) => {
        if (eventsObject !== null) {
          Object.keys(eventsObject).forEach((firebaseKey) => {
            eventsObject[firebaseKey].id = firebaseKey;
            eventsArray.push(eventsObject[firebaseKey]);
          });
        }
        resolve(eventsArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

module.exports = {
  getEventsData,
  createEvent,
};
