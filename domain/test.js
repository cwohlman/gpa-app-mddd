const ViewGrandkidsFeatureTest = require('./specifications/view-grandkids-feature-test');
const makeDomain = require('./test-domain/root');

module.exports = function test() {
  // uncomment to see how insanely fast these tests are :)
  // for (var i = 0; i < 100000; i++) {
    ViewGrandkidsFeatureTest(makeDomain);
  // }
  console.log('Success!');
}
