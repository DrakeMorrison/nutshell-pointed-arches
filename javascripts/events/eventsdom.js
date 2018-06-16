const domStrang = (eventsArray) => {
  let strang = '';
  eventsArray.forEach((event) => {
    strang +=  `<div class="col-sm-12">`;
    strang +=   `<div class="thumbnail event-card" data-firebase-event-id="${event.id}">`;
    strang +=     `<h3>${event.eventName}</h3>`;
    strang +=     `<h4>${event.eventLocation}</h4>`;
    strang +=     `<h4>${event.eventDate}</h3>`;
    strang +=     `<p><a href="#" id="event-edit-button" class="btn btn-warning" role="button">Edit</a> <a href="#" id="event-delete-button" class="btn btn-danger" role="button">Delete</a></p>`;
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
