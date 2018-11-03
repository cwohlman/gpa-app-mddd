module.exports = class View {
  constructor(params) {
    this.params = params;
  }
  render() {
    throw new Error('This view is not yet implemented!');
  }
}