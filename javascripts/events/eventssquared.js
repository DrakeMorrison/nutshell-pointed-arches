const eventsFirebaseApi = require('./eventsFirebaseApi');
const eventsDom = require('./eventsDom');

const getEventsEvent = () => {
  eventsFirebaseApi.getEventsData()
    .then((eventsArray) => {
      eventsDom.domStrang(eventsArray);
    })
    .catch((error) => {
      console.error('getEventsEvent error - check eventsFirebaseApi.js and eventsSqaured.js', error);
    });
};

const postEventsEvent = () => {
  eventsFirebaseApi.createEvent()
    .then((event) => {
      eventsDom.domStrang(event);
    })
    .catch((error) => {
      console.error('postEventsEvent error - check eventsFirebaseAPi.js and eventsSquared.js', error);
    });
};

const clickEvents = () => {
  // $(document).keypress((e) => {
  //   if (e.key === 'Enter' && $('')) {
  //     eventsInputs();
  //   }
  // });
  $(document).on('click', '#event-submit-button', (e) => {
    const singleEventInput = $('#event-input').val();
    const locationInput = $('#location-input').val();
    const dateInput = $('#date-input').val();
    const eventInfo = {
      eventName: singleEventInput,
      eventLocation: locationInput,
      eventDate: dateInput,
    };
    eventsFirebaseApi.createEvent(eventInfo);
  });
};

const deleteEventFromFirebase = () => {
  $(document).on('click', '#event-delete-button', (e) => {
    const deletedEventId = $(e.target).closest('.event-card').data('firebase-event-id');
    eventsFirebaseApi.deleteEvent(deletedEventId)
      .then(() => {
        getEventsEvent();
      })
      .catch((error) => {
        console.error('deleteEventFromFirebase error - check eventsSquared.js', error);
      });
  });
};

const startEvents = () => {
  deleteEventFromFirebase();
  getEventsEvent();
  clickEvents();
};

module.exports = {
  startEvents,
  postEventsEvent,
};
