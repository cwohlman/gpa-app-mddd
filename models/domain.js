// @ts-check

module.exports = class Domain {
  constructor() {
    this._events = [];
    this._id = 0;
  }
  invoke(command) {
    return command.execute(this);
  }
  emit(event) {
    event.id = this._id++;
    this._events.push(event);
  }
  stream() {
    return this._events;
  }
  // TODO: cache aggregates and domains
  // TODO: filter
}
