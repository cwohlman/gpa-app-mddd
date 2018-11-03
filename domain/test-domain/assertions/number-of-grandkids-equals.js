const Assertion = require('../../../models/assertion');

module.exports = class NumberOfGrandkidsEquals extends Assertion {
  ok(domain) {
    return domain.view.grandkids.length === this.params;
  }
}