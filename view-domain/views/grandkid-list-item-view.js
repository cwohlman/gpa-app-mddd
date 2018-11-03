const React = require('../react-shim');

class ListItemView extends React.Component {
  render() {
    const {
      model
    } = this.props;
    return React.createElement("div", null, model.name());
  }

}

module.exports = ListItemView;