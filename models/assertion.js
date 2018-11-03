module.exports = class Assertion {
  constructor(params) {
    this.params = params;
  }
  execute(domain) {
    if (! this.ok(domain)) {
      throw new Error(this.message(domain));
    }
  }
  ok() {
    throw new Error('This assertion\'s ok method is not yet implemented!');
  }
  message() {
    return 'Assertion failed: ' + this.constructor.name;
  }
}