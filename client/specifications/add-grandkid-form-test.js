module.exports = function AddGrandkidFormTest(createClient) {
  let client;
  let world;

  scenario('Renders an input', function () {
    WhenTheAddGrandkidFormIsRendered();

    ThenAnInputShouldBeVisible();
  });

  function WhenTheAddGrandkidFormIsRendered() {
    world.view = client.render('/add');
  }
  function ThenAnInputShouldBeVisible() {
    ExpectHtmlElementToBeRendered('input');
  }

  function ExpectHtmlElementToBeRendered(elementName) {
    if (! FindHtmlElementByTagName(elementName)) {
      throw new Error(`Expected to find element with name ${elementName} but none was found.`);
    }
  }

  function FindHtmlElementByTagName(tagName) {
    return world.view.indexOf(tagName) !== -1;
  }

  function scenario(name, fn) {
    client = createClient();
    world = { };
    fn();
  }
}