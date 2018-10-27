module.exports = function test() {
  const ViewGrandkidsFeatureTest = require('./specifications/view-grandkids-feature-test');

  const makeDomain = require('./root');

  ViewGrandkidsFeatureTest(makeDomain);
}
