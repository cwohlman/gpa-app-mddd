module.exports = function attachQueryToDomain (domain, name, query) {
  domain[name] = function (...args) {
    return query(args, domain);
  }
}