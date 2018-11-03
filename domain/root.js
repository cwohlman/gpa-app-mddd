const Domain = require('../models/domain');

const ViewAllGrandkidsQuery = require('./queries/view-all-grandkids')
const AddGrandkidCommand = require('./commands/add-grandkid')
const GrandkidSubdomain = require('./domains/grandkid')
const GrandkidsAggregate = require('./aggregates/grandkids')

class AppDomain extends Domain {
  ViewAllGrandkids(props) {
    return this.invoke(new ViewAllGrandkidsQuery(props));
  }
  AddGrandkid(props) {
    return this.invoke(new AddGrandkidCommand(props));
  }
  Grandkid(props) {
    return this.invoke(new GrandkidSubdomain(props));
  }
  Grandkids(props) {
    return this.invoke(new GrandkidsAggregate(props));
  }
}

module.exports = function makeDomain() {
  return new AppDomain();
}
