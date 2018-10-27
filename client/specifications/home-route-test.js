module.exports = function HomeRouteTest(createClient) {
  let client;
  let world;

  scenario('Renders default view', function () {
    WhenTheHomepageIsRendered();

    ThenTheDefaultViewShouldBeRendered();
  });

  scenario('Renders homepage heading heading', function () {
    WhenTheHomepageIsRendered();

    ThenTheHomepageHeadingShouldBeVisible();
  });

  function WhenTheHomepageIsRendered() {
    world.view = client.render('/');
  }
  function ThenTheDefaultViewShouldBeRendered() {
    ExpectComponentToBeRendered('DefaultView');
  }
  function ThenTheHomepageHeadingShouldBeVisible() {
    ExpectElementToBeRendered('HomepageHeading');
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