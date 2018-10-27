const makeClient = require('./root');
const makeViewDomain = require('../view-domain/root');
const makeDomain = require('../domain/root');

const HomeRouteTest = require('./specifications/home-route-test');
const AddGrandkidFormTest = require('./specifications/add-grandkid-form-test');
const ListOfGrandkidsTest = require('./specifications/list-of-grandkids-test');

module.exports = function test() {
  function makeTestClient() {
    return makeClient(makeViewDomain(makeDomain()));

  }
  HomeRouteTest(makeTestClient);
  AddGrandkidFormTest(makeTestClient);
  ListOfGrandkidsTest(makeTestClient);
};
