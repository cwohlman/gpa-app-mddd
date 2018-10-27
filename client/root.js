const attachViewToClient = require('./helpers/attach-view-to-client');

const renderDefaultView = require('./layouts/default-view');
const renderListOfGrandkids = require('./layouts/list-of-grandkids');
const renderAddGrandkidForm = require('./layouts/add-grandkid-form');
const renderAGrandkidListItem = require('./layouts/grandkid-list-item');

module.exports = function render(viewDomain) {
  const client = {
    domain: viewDomain,
    render(path) {
      if (path === '/') {
        return this.DefaultView(viewDomain.DefaultView());
      }
      if (path === '/add') {
        return this.AddGrandkidForm(viewDomain.AddGrandkidForm());
      }
      if (path === '/list') {
        return this.ListOfGrandkids(viewDomain.ListOfGrandkids());
      }
      throw new Error(`The requested path ${path} was not found.`);
    },
    execute(fn, noUpdate) {
      fn();
      if (this.onUpdate && ! noUpdate) this.onUpdate();
    },
  };

  attachViewToClient('DefaultView', renderDefaultView, client);
  attachViewToClient('ListOfGrandkids', renderListOfGrandkids, client);
  attachViewToClient('AddGrandkidForm', renderAddGrandkidForm, client);
  attachViewToClient('GrandkidListItem', renderAGrandkidListItem, client);

  return client;
}
