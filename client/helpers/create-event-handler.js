handlers = [];

module.exports = function (fn) {
  const i = handlers.length;
  handlers[i] = fn;
  return `handlers[${i}](event)`;
};
