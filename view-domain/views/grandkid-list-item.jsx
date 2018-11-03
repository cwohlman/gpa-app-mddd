const React = require('../react-shim');

class ListItemView extends React.Component {
  render() {
    const { model } = this.props;
    return <div>{model.name()}</div>;
  }
}

module.exports = ListItemView
