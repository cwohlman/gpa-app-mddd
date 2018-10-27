const makeClient = require('./root');
const makeViewDomain = require('../view-domain/root');
const makeDomain = require('../domain/root');

client = makeClient(makeViewDomain(makeDomain()));

client.onUpdate = rerender;

function rerender() {
  rootNode.innerHTML = client.render('/');
}

rootNode = document.createElement('div');

document.body.append(rootNode);

rerender();