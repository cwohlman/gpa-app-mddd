const View = require('../../models/view');
const view = require('./list-of-grandkids-view');
module.exports = class ListOfGrandkids extends View {
  visibleChildren() {
    const grandkids = this.domain.coreDomain.ViewAllGrandkids().grandkids || [];

    return grandkids.map(grandkid => this.domain.GrandkidListItem(grandkid));
  }
  view() {
    return view;
  }
}
