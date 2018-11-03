const { h } = require('preact');

const ViewDomain = require('../view-domain/root').AppViewDomain;
class ClientViewDomain extends ViewDomain {
  constructor(coreDomain, update) {
    super(coreDomain);

    this._update = update;
  }
  execute(name, params) {
    super.execute(name, params);
    this._update();
  }
  render(view) {
    view.domain = this;
    return h(view.view(), { model: view });
  }
  store(namespace, key, value) {
    super.store(namespace, key, value);
    this._update();
  }
  get(namespace, key) {
    return super.get(namespace, key);
  }

  root(path) {
    if (path === '/') {
      return this.DefaultView();
    }
    if (path === '/add') {
      return this.AddGrandkidForm();
    }
    if (path === '/list') {
      return this.ListOfGrandkids();
    }
    throw new Error(`The requested path ${path} was not found.`);
  }
}

module.exports = function render(coreDomain, update) {
  return new ClientViewDomain(coreDomain, update);
}
