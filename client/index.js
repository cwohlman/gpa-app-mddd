const makeClient = require('./root');
const makeViewDomain = require('../view-domain/root');
const makeDomain = require('../domain/root');

const { h, Component, render } = require('preact');

class AppRoot extends Component {
  componentWillMount() {
    this.view = makeClient(makeDomain(), () => this.forceUpdate());
  }
  render() {
    return this.view.root('/');
  }
}

render(h(AppRoot), document.body);