module.exports = function AddGrandkid(grandkid) {
  return [{
    domain: 'grandkid',
    action: 'add',
    details: grandkid,
  }];
}