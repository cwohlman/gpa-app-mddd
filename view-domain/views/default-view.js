const View = require('../../models/view');
const view = require('./default-view-view');

module.exports = class DefaultView extends View {
  visibleChildren() {
    return [
      this.domain.ListOfGrandkids(),
      this.domain.AddGrandkidForm(),
    ];
  }
  view() {
    return view;
  }
}
