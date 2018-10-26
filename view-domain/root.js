const attachViewToDomain = require('./helpers/attach-view-to-domain');

const defaultView = require('./views/default-view');
const listOfGrandkids = require('./views/list-of-grandkids');
const grandkidListItem = require('./views/grandkid-list-item');
const addGrandkidForm = require('./views/add-grandkid-form');

module.exports = function makeDomain(coreDomain) {
  const storage = {};
  const domain = {
    core: coreDomain,
    store: function (namespace, key, value) {
      storage[`${namespace}::${key}`] = value;
    },
    get: function (namespace, key) {
      return storage[`${namespace}::${key}`];
    },
  };

  attachViewToDomain(domain, 'DefaultView', defaultView);
  attachViewToDomain(domain, 'ListOfGrandkids', listOfGrandkids);
  attachViewToDomain(domain, 'GrandkidListItem', grandkidListItem);
  attachViewToDomain(domain, 'AddGrandkidForm', addGrandkidForm);

  return domain;
}