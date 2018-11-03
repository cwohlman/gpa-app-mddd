const React = require('../react-shim');

class DefaultView extends React.Component {
  render() {
    return <div>{
      this.props.model.visibleChildren()
    }</div>;
  }
}

module.exports = DefaultView
