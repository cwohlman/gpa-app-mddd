module.exports = function makeGrandkid() {
  const domain = { events: [] };

  const attachAggregate = require('../helpers/attach-aggregate-to-domain');
  const genericPropertyQuery = require('../aggregates/generic-property-aggregate');

  attachAggregate(domain, 'Name', genericPropertyQuery('name'));

  return domain;
}