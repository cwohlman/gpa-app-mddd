module.exports = function addGrandkidForm(args, domain) {
  const grandkid = args[0];
  return {
    view: 'AddGrandkidForm',
    inputName(name) {
      domain.store('AddGrandkidForm', 'nameInput', name);
    },
    submitForm() {
      const name = domain.get('AddGrandkidForm', 'nameInput');

      domain.core.AddGrandkid({ name });
    }
  };
}