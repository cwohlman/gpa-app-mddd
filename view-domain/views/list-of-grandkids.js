module.exports = function listOfGrandkids(args, domain) {
  return {
    view: 'ListOfGrandkids',
    visibleChildren() {
      const grandkids = domain.core.ViewAllGrandkids().grandkids;

      return grandkids.map(grandkid => domain.GrandkidListItem(grandkid));
    }
  }
}