const ViewDomain = require('../models/view-domain');

const DefaultView = require('./views/default-view');
const ListOfGrandkids = require('./views/list-of-grandkids');
const GrandkidListItem = require('./views/grandkid-list-item');
const AddGrandkidForm = require('./views/add-grandkid-form');

class AppViewDomain extends ViewDomain {
  constructor(coreDomain) {
    super();
    this.coreDomain = coreDomain;
  }
  DefaultView(params) {
    return this.render(new DefaultView(params));
  }
  ListOfGrandkids(params) {
    return this.render(new ListOfGrandkids(params));
  }
  GrandkidListItem(params) {
    return this.render(new GrandkidListItem(params));
  }
  AddGrandkidForm(params) {
    return this.render(new AddGrandkidForm(params));
  }
}

module.exports = function makeDomain(coreDomain) {
  return new AppViewDomain(coreDomain);
}
module.exports.AppViewDomain = AppViewDomain;
