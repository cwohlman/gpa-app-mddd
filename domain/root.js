const attachQuery = require('./helpers/attach-query-to-domain');
const attachCommand = require('./helpers/attach-command-to-domain');
const attachSubdomain = require('./helpers/attach-subdomain-to-domain');
const attachAggregate = require('./helpers/attach-aggregate-to-domain');
const ViewAllGrandkids = require('./queries/view-all-grandkids')
const AddGrandkid = require('./commands/add-grandkid')
const Grandkid = require('./domains/grandkid')
const Grandkids = require('./aggregates/grandkids')


module.exports = function makeDomain() {
  const domain = { events: [] };

  attachQuery(domain, 'ViewAllGrandkids', ViewAllGrandkids);
  attachCommand(domain, 'AddGrandkid', AddGrandkid);
  attachSubdomain(domain, 'Grandkid', Grandkid);
  attachAggregate(domain, 'Grandkids', Grandkids);

  return domain;
}
