module.exports = function HomeRouteTest(createClient) {
  let client;
  let world;

  scenario('Renders a grandkid', function () {
    GivenOneGrandkid();

    WhenTheListOfGrandkidsIsRendered();

    ThenOneGrandkidShouldBeShown();
  });

  function GivenOneGrandkid() {
    client.domain.core.AddGrandkid({
      name: 'Maria'
    });
  }
  function WhenTheListOfGrandkidsIsRendered() {
    world.view = client.render('/list');
  }
  function ThenOneGrandkidShouldBeShown() {
    ExpectElementToBeRendered('GrandkidListItem');
  }

  function ExpectComponentToBeRendered(viewName) {
    if (! FindHtmlElementWithClass(viewName)) {
      throw new Error(`Expected ${viewName} component to be rendered but none was found.`);
    }
  }
  function ExpectElementToBeRendered(elementName) {
    if (! FindHtmlElementWithClass(elementName)) {
      throw new Error(`Expected ${elementName} element to be rendered but none was found.`);
    }
  }
  function FindHtmlElementWithClass(className) {
    return world.view.indexOf(className) !== -1;
  }

  function scenario(name, fn) {
    client = createClient();
    world = { };
    fn();
  }
}