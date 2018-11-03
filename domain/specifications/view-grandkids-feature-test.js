/**
 * @param makeDomain { import("../test-domain/root") }
 */
module.exports = function ViewGrandkidsFeatureTest(makeDomain) {
  /**
   * @type { import("../test-domain/root").TestDomain }
   */
  let domain;
  let world;

  scenario('Can view one grandkid', function () {
    domain.GivenOneGrandkidHasBeenAdded();
    domain.WhenIViewAllGrandkids();
    domain.ThenIShouldSeeOneGrandkid();
  });

  scenario('Can view multiple grandkids', function () {
    GivenOneGrandkidHasBeenAdded();
    AndAnotherGrandkidHasBeenAdded();
    WhenIViewAllGrandkids();
    ThenIShouldSeeTwoGrandkid();
  });

  scenario('Can view names of grandkids', function () {
    GivenAGrandkidHasBeenAddedWithName('Maria');
    WhenIViewAllGrandkids();
    ThenIShouldSeeAGrandkidWithName('Maria');
  });


  function GivenOneGrandkidHasBeenAdded() {
    domain.AddGrandkid({
      name: 'GivenOneGrandkidHasBeenAdded'
    });
  }

  function GivenAGrandkidHasBeenAddedWithName(name) {
    domain.AddGrandkid({
      name
    });
  }

  function AndAnotherGrandkidHasBeenAdded() {
    GivenOneGrandkidHasBeenAdded();
  }

  function WhenIViewAllGrandkids() {
    world.result = domain.ViewAllGrandkids();
  }

  function ThenIShouldSeeAGrandkidWithName(name) {
    ExpectToFindGrandkid(WithName(name), world.result);
  }

  function ThenIShouldSeeTwoGrandkid() {
    ExpectNumberOfGrandkids(2, world.result);
  }

  function ExpectNumberOfGrandkids(number, query) {
    const list = query.grandkids;
    if (! list) {
      throw new Error(`Expected a list of grandkids but none was provided.`);
    }
    if (list.length !== number) {
      throw new Error(`Expected ${number} grandkids but query returned ${list.length} grandkids.`);
    }
  }

  function ExpectToFindGrandkid(finder, query) {
    const list = query.grandkids;
    if (! list) {
      throw new Error(`Expected a list of grandkids but none was provided.`);
    }
    if (! list.find(finder)) {
      console.log(list[0]);
      throw new Error(`Expected to find a grandkid ${finder.description} but none was found among the ${list.length} grandkids.`);
    }
  }

  function WithName(name) {
    const finder = function FindWithName(item) {
      if (typeof item.Name !== 'function') {
        console.log(item);
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
    world = {};
    fn();
  }
}