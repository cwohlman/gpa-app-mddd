const React = require('../react-shim');

class AddGrandkidFormView extends React.Component {
  render() {
    const {
      model
    } = this.props;
    return React.createElement("form", {
      onSubmit: e => {
        e.preventDefault();
        model.submitForm();
      }
    }, React.createElement("input", {
      value: model.currentName(),
      onChange: e => model.inputName(e.target.value)
    }));
  }

}

module.exports = AddGrandkidFormView;