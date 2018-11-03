module.exports = class Query {
  constructor(params) {
    this.params = params;
  }
  execute() {
    throw new Error('This query is not yet implemented!');
  }
}