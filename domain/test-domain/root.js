// @ts-check
const AppDomain = require('../root').AppDomain;

const NumberOfGrandkidsEquals = require('./assertions/number-of-grandkids-equals');

class TestDomain extends AppDomain {
  GivenOneGrandkidHasBeenAdded() {
    this.AddGrandkid({});
  }
  WhenIViewAllGrandkids() {
    this.view = this.ViewAllGrandkids();
  }
  ThenIShouldSeeOneGrandkid() {
    this.ExpectNumberOfGrandkids(1);
  }
  ExpectNumberOfGrandkids(count) {
    this.invoke(new NumberOfGrandkidsEquals(count));
  }
}

module.exports = function () {
  return new TestDomain();
}
module.exports.TestDomain = TestDomain;
