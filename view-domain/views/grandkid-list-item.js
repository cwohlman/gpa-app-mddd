const View = require('../../models/view');

module.exports = class GrandkidListItem extends View {
  name() {
    return this.props.Name();
  }
}
