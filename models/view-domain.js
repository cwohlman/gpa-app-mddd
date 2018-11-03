module.exports = class ViewDomain {
  constructor() {
    this.storage = {};
  }
  render(view) {
    view.domain = this;
    return view;
  }
  store(namespace, key, value) {
    this.storage[`${namespace}::${key}`] = value;
  }
  get(namespace, key) {
    return this.storage[`${namespace}::${key}`];
  }
}