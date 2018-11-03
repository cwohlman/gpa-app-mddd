const Command = require('../../models/command');

module.exports = class AddGrandkidCommand extends Command {
  execute(domain) {
    domain.emit({
      action: 'add',
      subdomain: 'grandkid',
      details: this.params,
    });
  }
}