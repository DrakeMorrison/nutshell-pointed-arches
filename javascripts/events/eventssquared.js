const eventsFirebaseApi = require('./eventsfirebaseApi');
const eventsDom = require('./eventsdom');

const getEventsEvent = () => {
  eventsFirebaseApi.getEventsData()
    .then((eventsArray) => {
      eventsdom.domStrang(eventsArray);
    })
    .catch((error) => {
      console.error('getEventsEvent error - check eventsfirebaseApi.js and eventsSqaured.js', error);
    });
};

const postEventsEvent = () => {
  eventsFirebaseApi.createEvent()
    .then((event) => {
      eventsdom.domStrang(event);
    })
    .catch((error) => {
      console.error('postEventsEvent error - check eventsfirebaseAPi.js and eventsSquared.js', error);
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
    eventsfirebaseApi.createEvent(eventInfo);
  });
};

const deleteEventFromFirebase = () => {
  $(document).on('click', '#event-delete-button', (e) => {
    const deletedEventId = $(e.target).closest('.event-card').data('firebase-event-id');
    eventsfirebaseApi.deleteEvent(deletedEventId)
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
