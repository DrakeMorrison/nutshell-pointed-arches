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

const deleteEvent = (eventId) => {
  return new Promise ((resolve, reject) => {
    const config = mainFirebaseApi.getConfig();
    $.ajax({
      method: 'DELETE',
      url: `${config.databaseURL}/events/${eventId}.json`,
    })
      .done(() => {
        resolve();
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const editEvent = (editedEvent, eventId) => {
  return new Promise ((resolve, reject) => {
    const config = mainFirebaseApi.getConfig();
    $.ajax({
      method: 'PUT',
      url: `${config.databaseURL}/events/${eventId}.json`,
      data: JSON.stringify(editedEvent),
    })
      .then((updatedEventFromFirebase) => {
        resolve(updatedEventFromFirebase);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

module.exports = {
  deleteEvent,
  getEventsData,
  createEvent,
  editEvent,
};
