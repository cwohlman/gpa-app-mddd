module.exports = function (start, cleanup) {
  if (global.cleanup) {
    global.cleanup();
  }

  global.cleanup = cleanup;

  function begin() {
    try {
      start();
    } catch (error) {
      console.log('Error: ', error);
    }
  }
}