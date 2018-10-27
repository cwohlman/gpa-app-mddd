const createEventHandler = require('../helpers/create-event-handler');

module.exports = function RenderAddGrandkidForm(view, children, client) {
  const renderedView = 
`
<form class="list" onsubmit="${createEventHandler(function (e) {
  e.preventDefault();
  client.execute(function () {
    view.submitForm();
  });
})}">
  <label>
    Add Grandkid:
    <input type="text" oninput="${createEventHandler(function (e) {
      const change = e.target.value;
      client.execute(function () {
        view.inputName(change);
      }, true);
    })}" />
  </label>
</form>
`.trim();
  return renderedView;
}