const ViewGrandkidsFeatureTest = require('./specifications/view-grandkids-feature-test');
module.exports = function test() {
  const makeDomain = require('./root');

  ViewGrandkidsFeatureTest(makeDomain);
}
