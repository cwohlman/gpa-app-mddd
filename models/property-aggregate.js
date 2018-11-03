const Aggregate = require('./aggregate');

module.exports = class PropertyAggregate extends Aggregate {
  reduce(accumulator, event) {
    if (event.action === 'add') {
      return event.details[this.params];
    }
    if (event.action === 'update') {
      return event.details[this.params];
    }
    return accumulator;
  }
}