const Aggregate = require('../../models/aggregate');

module.exports = class GrandkidsAggregate extends Aggregate {
  reduce(accumulator, event, domain) {
    if (! accumulator) {
      accumulator = [];
    }

    if (event.subdomain === 'grandkid') {
      if (event.action === 'add') {
        accumulator.push(domain.Grandkid(event.id));
      }
    }

    return accumulator;
  }
}