const View = require('../../models/view');

module.exports = class AddGrandkidForm extends View {
  inputName(name) {
    this.domain.store('AddGrandkidForm', 'nameInput', name);
  }
  submitForm() {
    const name = this.domain.get('AddGrandkidForm', 'nameInput');

    this.domain.coreDomain.AddGrandkid({ name });
  }
}
