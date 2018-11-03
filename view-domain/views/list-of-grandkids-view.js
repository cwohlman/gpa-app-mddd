const React = require('../react-shim');

class ListOfGrandkidsView extends React.Component {
  render() {
    const {
      model
    } = this.props;
    return React.createElement("div", null, model.visibleChildren());
  }

}

module.exports = ListOfGrandkidsView;