const attachAggregate = require('../helpers/attach-aggregate-to-domain');
const genericPropertyQuery = require('../aggregates/generic-property-aggregate');

module.exports = function makeGrandkid() {
  const domain = { events: [] };

  attachAggregate(domain, 'Name', genericPropertyQuery('name'));

  return domain;
}