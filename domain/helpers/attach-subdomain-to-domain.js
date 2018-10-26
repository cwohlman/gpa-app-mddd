module.exports = function attachSubdomainToDomain(domain, name, subdomain) {
  domain[name] = function (...args) {
    return subdomain(args);
  }
};
