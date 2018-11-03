const React = require('../react-shim');

class AddGrandkidFormView extends React.Component {
  render() {
    const { model } = this.props;
    return (
      <form onSubmit={(e) => { e.preventDefault(); model.submitForm(); }}>
        <input value={model.currentName()} onChange={(e) => model.inputName(e.target.value)} />
      </form>
    );
  }
}

module.exports = AddGrandkidFormView
