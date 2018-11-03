const View = require('../../models/view');

module.exports = class DefaultView extends View {
  visibleChildren() {
    return [
      this.domain.ListOfGrandkids(),
      this.domain.AddGrandkidForm(),
    ];
  }
}
