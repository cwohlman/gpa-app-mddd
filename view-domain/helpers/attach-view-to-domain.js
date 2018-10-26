module.exports = function attachViewToDomain(domain, name, view) {
  domain[name] = function domainView(...args) {
    return view(args, domain);
  }
}