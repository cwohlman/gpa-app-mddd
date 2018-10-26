module.exports = function attachCommandToDomain (domain, name, command) {
  domain[name] = function (...args) {
    const events = command(...args);

    domain.events.push(...events);

    return events;
  }
}