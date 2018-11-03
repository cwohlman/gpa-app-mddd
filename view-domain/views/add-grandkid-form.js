const View = require('../../models/view');
const view = require('./add-grandkid-form-view.js');

module.exports = class AddGrandkidForm extends View {
  inputName(name) {
    this.domain.store('AddGrandkidForm', 'nameInput', name);
  }
  currentName() {
    return this.domain.get('AddGrandkidForm', 'nameInput');
  }
  submitForm() {
    const name = this.domain.get('AddGrandkidForm', 'nameInput');

    this.domain.execute('AddGrandkid', { name });

    this.domain.store('AddGrandkidForm', 'nameInput', '');
  }
  view() {
    return view;
  }
}
