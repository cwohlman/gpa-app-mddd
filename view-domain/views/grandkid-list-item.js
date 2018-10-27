module.exports = function grandkidListItem(args, domain) {
  const grandkid = args[0];
  return {
    view: 'GrandkidListItem',
    name: grandkid.Name(),
  };
}