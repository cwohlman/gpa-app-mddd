module.exports = function makeGenericPropertyQuery(name) {
  return function getProperty(aggregate, event, domain) {
    if (event.action === 'add') {
      return event.details[name];
    }
    return aggregate;
    // if (event.action === 'update')
  }
}