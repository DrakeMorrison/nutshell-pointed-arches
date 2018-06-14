const domStrang = (eventsArray) => {
  eventsArray.forEach((event) => {
    let strang = '';
    strang +=  `<div class="col-sm-12">`;
    strang +=   `<div class="thumbnail">`;
    strang +=     `<h3>${event.event}</h3>`;
    strang +=     `<h4>${event.startDate}</h3>`;
    strang +=     `<p>${event.location}</p>`;
    strang +=     `<p><a href="#" class="btn btn-primary" role="button">Save</a> <a href="#" class="btn btn-warning" role="button">Edit</a></p>`;
    strang +=    `</div>`;
    printToDom('#events-holder', strang);
  });
};

const printToDom = (id, string) => {
  $(id).html(string);
};

module.exports = {
  domStrang,
};
