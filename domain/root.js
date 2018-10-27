module.exports = function makeDomain() {
  const domain = { events: [] };

  const attachQuery = require('./helpers/attach-query-to-domain');
  const attachCommand = require('./helpers/attach-command-to-domain');
  const attachSubdomain = require('./helpers/attach-subdomain-to-domain');
  const attachAggregate = require('./helpers/attach-aggregate-to-domain');

  attachQuery(domain, 'ViewAllGrandkids', require('./queries/view-all-grandkids'));
  attachCommand(domain, 'AddGrandkid', require('./commands/add-grandkid'));
  attachSubdomain(domain, 'Grandkid', require('./domains/grandkid'));
  attachAggregate(domain, 'Grandkids', require('./aggregates/grandkids'));

  return domain;
}
