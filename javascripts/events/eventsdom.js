const domStrang = (eventsArray) => {
  let strang = '';
  eventsArray.forEach((event) => {
    strang +=  `<div class="col-sm-12">`;
    strang +=   `<div class="thumbnail">`;
    strang +=     `<h3>${event.eventName}</h3>`;
    strang +=     `<h4>${event.eventLocation}</h4>`;
    strang +=     `<h4>${event.eventDate}</h3>`;
    strang +=     `<p><a href="#" id="event-save-button" class="btn btn-primary" role="button">Save</a> <a href="#" id="event-edit-button" class="btn btn-warning" role="button">Edit</a></p>`;
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
