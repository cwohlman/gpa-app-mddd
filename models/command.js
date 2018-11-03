module.exports = class Command {
  constructor(params) {
    this.params = params;
  }
  execute() {
    throw new Error('This command is not yet implemented!');
  }
}