module.exports = class Aggregate {
  constructor(params) {
    this.params = params;
  }
  execute(domain) {
    const events = domain.stream();
    let result;

    events.forEach(event => result = this.reduce(result, event, domain));

    return result;
  }
  reduce(accumulator, event) {
    throw new Error('Aggregate reduce function is not yet implemented!');
  }
}