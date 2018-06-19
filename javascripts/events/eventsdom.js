const domStrang = (eventsArray) => {
  let strang = '';
  eventsArray.forEach((event) => {
    strang +=  `<div class="col-sm-12">`;
    strang +=   `<div class="thumbnail event-card" data-firebase-event-id="${event.id}">`;
    strang +=     `<h3 class="event-card-name">${event.eventName}</h3>`;
    strang +=     `<h4 class="event-card-location">${event.eventLocation}</h4>`;
    strang +=     `<h4 class="event-card-date">${event.eventDate}</h3>`;
    strang +=     `<p><a href="#" class="btn btn-warning event-edit-button" role="button">Edit</a> <a href="#" class="btn btn-danger event-delete-button" role="button">Delete</a></p>`;
    strang +=    `</div>`;
    strang +=    `</div>`;
  });
  printToDom('#events-card-holder', strang);
};

const printToDom = (id, string) => {
  $(id).html(string);
};

module.exports = {
  domStrang,
};
