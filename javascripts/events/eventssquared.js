const eventsFirebaseApi = require('./eventsfirebaseApi');
const eventsdom = require('./eventsdom');
const firebaseApi = require('../firebaseApi');

let editedEventId = '';

const getEventsEvent = () => {
  eventsFirebaseApi.getEventsData()
    .then((eventsArray) => {
      eventsdom.domStrang(eventsArray);
    })
    .catch((error) => {
      console.error('getEventsEvent error - check eventsfirebaseApi.js and eventsSqaured.js', error);
    });
};

const clickEventAndSaveEvent = () => {
  // $(document).keypress((e) => {
  //   if (e.key === 'Enter' && $('')) {
  //     eventsInputs();
  //   }
  // });
  $(document).on('click', '.event-save-button-1', (e) => {
    const singleEventInput = $('#event-input').val();
    const locationInput = $('#location-input').val();
    const dateInput = $('#date-input').val();
    const eventInfo = {
      eventName: singleEventInput,
      eventLocation: locationInput,
      eventDate: dateInput,
      userUid: firebaseApi.getUID(),
    };
    eventsFirebaseApi.createEvent(eventInfo).then((responseData) => {
      getEventsEvent();
    })
      .catch((error) => {
        console.error('clickEventAndSaveEvent no work, check that', error);
      });
  });
};

const deleteEventFromFirebase = () => {
  $(document).on('click', '.event-delete-button', (e) => {
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

const editCards = () => {
  $(document).on('click', '.event-edit-button', (e) => {
    const editCard = $(e.target).closest('.event-card');
    const singleEventInput = editCard.find($('.event-card-name')).html();
    const locationInput = editCard.find($('.event-card-location')).html();
    const dateInput = editCard.find($('.event-card-date')).html();
    $('#event-input-edit').val(singleEventInput);
    $('#location-input-edit').val(locationInput);
    $('#date-input-edit').val(dateInput);
    $('.events-form-1').addClass('hide');
    $('.events-form-2').removeClass('hide');
    editedEventId = editCard.data('firebase-event-id');
  });
};

const editedCardsToSave = () => {
  $('.event-save-button-2').click(() => {
    const singleEventInput = $('#event-input-edit').val();
    const locationInput = $('#location-input-edit').val();
    const dateInput = $('#date-input-edit').val();
    const eventInfo = {
      eventName: singleEventInput,
      eventLocation: locationInput,
      eventDate: dateInput,
      userUid: firebaseApi.getUID(),
    };
    eventsFirebaseApi.editEvent(eventInfo, editedEventId).then(() => {
      getEventsEvent();
      $('#event-input-edit').val();
      $('#location-input-edit').val();
      $('#date-input-edit').val();
      $('.events-form-1').removeClass('hide');
      $('.events-form-2').addClass('hide');
    }).catch((error) => {
      console.error('editEvent not working', error);
    });
  });
};

const startEvents = () => {
  deleteEventFromFirebase();
  getEventsEvent();
  clickEventAndSaveEvent();
  editCards();
  editedCardsToSave();
};

module.exports = {
  startEvents,
};
