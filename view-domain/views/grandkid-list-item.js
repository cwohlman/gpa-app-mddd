const View = require('../../models/view');
const view = require('./grandkid-list-item-view');

module.exports = class GrandkidListItem extends View {
  name() {
    return this.params.Name();
  }
  view() {
    return view;
  }
}
