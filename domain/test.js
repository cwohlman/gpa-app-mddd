const ViewGrandkidsFeatureTest = require('./specifications/view-grandkids-feature-test');

const makeDomain = require('./root');

module.exports = function test() {
  ViewGrandkidsFeatureTest(makeDomain);
}
