const React = require('../react-shim');

class ListOfGrandkidsView extends React.Component {
  render() {
    const { model } = this.props;
    return (
      <div>
        {
          model.visibleChildren()
        }
      </div>
    )
  }
}

module.exports = ListOfGrandkidsView
