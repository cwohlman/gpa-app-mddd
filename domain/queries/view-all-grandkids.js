const Query = require('../../models/query');

module.exports = class ViewAllGrandkidsQuery extends Query {
  execute(domain) {
    return {
      grandkids: domain.Grandkids(),
    };
  }
}