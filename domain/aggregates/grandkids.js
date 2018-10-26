module.exports = function Grandkids(aggregate, event, domain) {
  aggregate = aggregate || [];
  if (event.domain === 'grandkid') {
    let subdomain = aggregate.find(kid => kid.id === event.id);
    if (! subdomain) {
      subdomain = domain.Grandkid();
      subdomain.id = aggregate.length;
      aggregate.push(subdomain);
    }
    subdomain.events.push(event);
  }
  return aggregate;
}