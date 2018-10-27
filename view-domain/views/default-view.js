module.exports = function defaultView(args, domain) {
  return {
    view: 'DefaultView',
    visibleChildren() {
      return [
        domain.ListOfGrandkids(),
        domain.AddGrandkidForm(),
      ]
    },
  }
}