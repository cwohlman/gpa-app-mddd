module.exports = function ViewGrandkidsFeatureTest(makeDomain) {
  let domain;
  let world;

  scenario('Each grandkid is presented', function () {
    GivenThereAreThreeGrandkids();

    WhenTheListOfGrandkidsIsPresented();

    ThenThreeGrandkidListItemsShouldBePresented();
  });

  function GivenThereAreThreeGrandkids() {
    domain.core.AddGrandkid({ name: 'One' });
    domain.core.AddGrandkid({ name: 'Two' });
    domain.core.AddGrandkid({ name: 'Three' });
  }

  function WhenTheListOfGrandkidsIsPresented() {
    world.view = domain.ListOfGrandkids();
  }

  function ThenThreeGrandkidListItemsShouldBePresented() {
    ExpectVisibleChildrenAre(GrandkidListItem, 3);
  }

  function ExpectVisibleChildrenAre(predicate, count) {
    const children = world.view.visibleChildren();
    const filteredChildren = children.filter(predicate);
    if (filteredChildren.length !== count) {
      throw new Error(`Expected ${count} children which are ${predicate.description}, but found ${filteredChildren.length} instead.`);
    }
  }

  function GrandkidListItem(item) {
    if (item.view !== 'GrandkidListItem') {
      return false;
    }
    return true;
  }

  GrandkidListItem.description = "Grandkid list items"

  function scenario(name, fn) {
    domain = makeDomain();
    world = {};
    fn();
  }
}