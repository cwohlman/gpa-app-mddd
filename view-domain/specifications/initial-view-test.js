const ListOfGrandkidsView = require('../views/list-of-grandkids');
const AddGrandkidFormView = require('../views/add-grandkid-form');

module.exports = function ViewGrandkidsFeatureTest(makeDomain) {
  let domain;
  let world;

  scenario('Can view and edit grandkids', function () {
    GivenThereAreThreeGrandkids();

    WhenTheDefaultViewIsPresented();

    ThenTheListOfGrandkidsShouldBePresented();

    AndTheAddGrandkidFormShouldBePresented();
  });

  function GivenThereAreThreeGrandkids() {
    domain.execute('AddGrandkid', { name: 'One' });
    domain.execute('AddGrandkid', { name: 'Two' });
    domain.execute('AddGrandkid', { name: 'Three' });
  }

  function WhenTheDefaultViewIsPresented() {
    world.view = domain.DefaultView();
  }

  function ThenTheListOfGrandkidsShouldBePresented() {
    ExpectVisibleChildrenAre(ListOfGrandkids, 1);
  }

  function AndTheAddGrandkidFormShouldBePresented() {
    ExpectVisibleChildrenAre(AddGrandkidForm, 1);
  }

  function ExpectVisibleChildrenAre(predicate, count) {
    const children = world.view.visibleChildren();
    const filteredChildren = children.filter(predicate);
    if (filteredChildren.length !== count) {
      throw new Error(`Expected ${count} children which are ${predicate.description}, but found ${filteredChildren.length} instead.`);
    }
  }

  function scenario(name, fn) {
    domain = makeDomain();
    world = {};
    fn();
  }
}

function ListOfGrandkids(item) {
  return item instanceof ListOfGrandkidsView;
}

ListOfGrandkids.description = 'List of grandkids view';

function AddGrandkidForm(item) {
  return item instanceof AddGrandkidFormView;
}

AddGrandkidForm.description = 'Add grandkid form';
