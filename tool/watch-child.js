module.exports = function (start, cleanup) {
  if (global.childProcess) {
    global.childProcess.on('exit', function () {
      begin();
    })
    global.childProcess.kill('SIGKILL');
  } else {
    begin();
  }

  function begin() {
    try {
      global.childProcess = start();

      if (cleanup) {
        global.childProcess.on('exit', cleanup);
      }
    } catch (error) {
      console.log('Error: ', error);
    }
  }
}