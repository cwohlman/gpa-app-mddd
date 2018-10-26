module.exports = function attachAggregateToDomain (domain, name, query) {
  domain[name] = function (...args) {
    let aggregate;

    domain.events.forEach(function (event) {
      aggregate = query(aggregate, event, domain);
    });

    return aggregate;
  }
}