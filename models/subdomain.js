const Domain = require('./domain');

module.exports = class Subdomain extends Domain {
  constructor(params, parentDomain) {
    super();
    this.params = params;
    this.parentDomain = parentDomain;
  }
  execute(domain) {
    this.parentDomain = domain;
    return this;
  }
  stream() {
    return this.parentDomain.stream().filter(e => this.filter(e));
  }
  emit() {
    throw new Error('Subdomain emit method not yet implemented!');
  }
  filter(event) {
    throw new Error('Subdomain filter method not yet implemented!');
  }
}