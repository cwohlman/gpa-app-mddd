module.exports = function viewAllGrandkids(args, domain) {
  return {
    grandkids: domain.Grandkids(),
  };
}
