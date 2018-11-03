const React = require('../react-shim');

class DefaultView extends React.Component {
  render() {
    return React.createElement("div", null, this.props.model.visibleChildren());
  }

}

module.exports = DefaultView;