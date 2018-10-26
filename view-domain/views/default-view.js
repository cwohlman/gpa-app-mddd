module.exports = function defaultView(args, domain) {
  return {
    visibleChildren() {
      return [
        domain.ListOfGrandkids(),
        domain.AddGrandkidForm(),
      ]
    }
  }
}