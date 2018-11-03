module.exports = function ViewGrandkidsFeatureTest(makeDomain) {
  let domain;
  let world;

  scenario('A grandkid is created with the specified name', function () {
    GivenTheFollowingNameIsInputed('Maria');

    WhenTheFormIsSubmitted();

    ThenAGrandkidShouldBeCreatedWithName('Maria');

    AndTheFormShouldBeEmpty();
  });

  function GivenTheFollowingNameIsInputed(name) {
    world.view.inputName(name);
  }
  function WhenTheFormIsSubmitted() {
    world.view.submitForm();
  }
  function ThenAGrandkidShouldBeCreatedWithName(name) {
    ExpectToFindGrandkid(WithName(name));
  }
  function AndTheFormShouldBeEmpty() {
    ExpectViewNameToBeEmpty()
  }
  function ExpectToFindGrandkid(finder) {
    const list = domain.query('ViewAllGrandkids').grandkids;
    if (! list) {
      throw new Error(`Expected a list of grandkids but none was provided.`);
    }
    if (! list.find(finder)) {
      console.log(list[0].Name());
      throw new Error(`Expected to find a grandkid ${finder.description} but none was found among the ${list.length} grandkids.`);
    }
  }
  function ExpectViewNameToBeEmpty() {
    if (world.view.currentName()) {
      throw new Error(`Expected the name field to be empty but got ${world.view.currentName()} instead.`);
    }
  }

  function WithName(name) {
    const finder = function FindWithName(item) {
      if (typeof item.Name !== 'function') {
        throw new Error(`Expected item to have a name but it has none.`);
      }
      if (item.Name() === name) {
        return true;
      }
      return false;
    }
    finder.description = `with name '${name}'`;
    return finder;
  }
  function scenario(name, fn) {
    domain = makeDomain();
    world = {
      view: domain.AddGrandkidForm()
    };
    fn();
  }
}
