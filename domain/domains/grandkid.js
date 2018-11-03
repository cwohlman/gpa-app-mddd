const Subdomain = require('../../models/subdomain');
const PropertyAggregate = require('../../models/property-aggregate');

module.exports = class GrandkidSubdomain extends Subdomain {
  filter(event) {
    const matchesSubdomain = event.subdomain === 'grandkid';
    if (! matchesSubdomain) {
      return false;
    }

    const itemId = event.grandkidid || event.id;
    const matchesId = itemId === this.params;
    if (! matchesId) {
      return false;
    }

    return true;
  }
  Name() {
    return this.invoke(new PropertyAggregate('name'))
  }
}