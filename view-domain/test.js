const ViewListedGrandkids = require('./specifications/view-listed-grandkids-test');
const InitialView = require('./specifications/initial-view-test');
const AddAGrandkidForm = require('./specifications/add-grandkid-form-test');

const makeViewDomain = require('./root');
const makeCoreDomain = require('../domain/root');

module.exports = function test() {
  function makeDomain() {
    return makeViewDomain(makeCoreDomain());
  }
  InitialView(makeDomain);
  ViewListedGrandkids(makeDomain);
  AddAGrandkidForm(makeDomain);
}
